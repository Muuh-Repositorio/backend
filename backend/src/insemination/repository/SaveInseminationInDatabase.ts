import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import console from "console";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { EntityRepository, Repository } from "typeorm";
import { InseminationDto } from "../dto/InseminationDto";
import { Insemination } from "../entity/Insemination.entity";

@EntityRepository(Insemination)
export class SaveInseminationInDatabase extends Repository<Insemination>  {

    async execute(inseminationDto: InseminationDto): Promise<Insemination> {
        const { idt_cow, insemination_date } = inseminationDto

        const insemination = this.create()

        insemination.idt_cow = idt_cow
        insemination.insemination_date = insemination_date

        try {
            await insemination.save()
            return insemination
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('Inseminação já existe!')
            } else {
                console.log(error)
                throw new InternalServerErrorException('Erro no servidor!')
            }
        }
    }

}
