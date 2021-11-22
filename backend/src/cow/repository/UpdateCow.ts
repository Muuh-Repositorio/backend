import { InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { UpdateCowDto } from "../dto/UpdateCowDto";
import { Cow } from "../entity/Cow.entity";

@EntityRepository(Cow)
export class UpdateCowInDatabase extends Repository<Cow> {
    async execute(cowDto: UpdateCowDto, idt_cow: number): Promise<Cow> {
        const { idt_farm, weight, situation } = cowDto

        const cow = this.create()

        if (idt_farm) cow.idt_farm = idt_farm
        if (weight) cow.weight = weight
        if (situation) cow.idt_situation = situation

        cow.idt_cow = idt_cow

        try {
            await cow.save()
            return cow
        } catch (error) {
            throw new InternalServerErrorException('Erro com o servidor!')
        }
    }
}