import { InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { InseminationDto } from "../dto/InseminationDto";
import { UpdateInseminationDto } from "../dto/UpdateInseminationDto";
import { Insemination } from "../entity/Insemination.entity";

@EntityRepository(Insemination)
export class UpdateInseminationInDatabase extends Repository<Insemination>{
    async execute(inseminationDTO: UpdateInseminationDto, idt_insemination: number): Promise<Insemination>{
        const { insemination_date, diagnosis } = inseminationDTO

        const insemination = this.create()
        if (diagnosis !== null) insemination.diagnosis = (diagnosis === 'true')
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