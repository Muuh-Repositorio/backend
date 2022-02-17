import { BadRequestException, ConflictException, InternalServerErrorException } from "@nestjs/common";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { EntityRepository, Repository } from "typeorm";
import { InseminationDto } from "../dto/InseminationDto";
import { Insemination } from "../entity/Insemination.entity";

@EntityRepository(Insemination)
export class SaveInseminationInDatabase extends Repository<Insemination>  {

    async execute(inseminationDto: InseminationDto): Promise<Insemination> {
        const { idt_cow, insemination_date, idt_bull, idt_semen } = inseminationDto
        const insemination = this.create()

        if (idt_bull) insemination.idt_bull = idt_bull
        if (idt_semen) insemination.idt_semen = idt_semen
        insemination.idt_cow = idt_cow
        insemination.insemination_date = insemination_date

        if (!idt_bull && !idt_semen) {
            throw new BadRequestException('Insira o código do touro ou o código do sêmen!')
        }
        try {
            await insemination.save()
            return insemination
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('Inseminação já existe!')
            } else {
                throw new InternalServerErrorException('Erro no servidor!')
            }
        }
    }

}
