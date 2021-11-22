import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import console from "console";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { EntityRepository, Repository } from "typeorm";
import { CowDto } from "../dto/CowDto";
import { Cow } from "../entity/Cow.entity";

@EntityRepository(Cow)
export class SaveCowInDatabase extends Repository<Cow>  {

    async execute(cowDto: CowDto, idt_situation: number): Promise<Cow> {
        const { idt_farm, idt_type, code, name, weight, birth_date } = cowDto

        const cow = this.create()

        cow.idt_situation = idt_situation
        cow.idt_farm = idt_farm
        cow.idt_type = idt_type
        cow.code = code
        cow.name = name
        cow.weight = weight
        cow.birth_date = birth_date

        try {
            await cow.save()
            return cow
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('Vaca já existe!')
            } else {
                throw new InternalServerErrorException('Erro no servidor!')
            }
        }
    }

}
