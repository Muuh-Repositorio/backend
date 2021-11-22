import { InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { InseminationDto } from "../dto/InseminationDto";
import { Insemination } from "../entity/Insemination.entity";

@EntityRepository(Insemination)
export class UpdateInseminationInDatabase extends Repository<Insemination>{
    async execute(inseminationDTO: InseminationDto, idt_insemination: number): Promise<Insemination>{
        const { diagnosis, insemination_date } = inseminationDTO

        const insemination = this.create()

        if (diagnosis) insemination.diagnosis = diagnosis
        if (insemination_date) insemination.insemination_date = insemination_date

        insemination.idt_insemination = idt_insemination

        try {
            await insemination.save()
            
            return insemination
        } catch (error) {
            throw new InternalServerErrorException('Erro com o servidor!')
        }
    }
}