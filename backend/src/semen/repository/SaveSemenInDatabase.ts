import { InternalServerErrorException } from "@nestjs/common";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { EntityRepository, Repository } from "typeorm";
import { SemenDto } from "../dto/SemenDto";
import { Semen } from "../entity/Semen.entity";

@EntityRepository(Semen)
export class SaveSemenInDatabase extends Repository<Semen> implements ServiceCommand {
    async execute(semenDto: SemenDto): Promise<Semen> {
        const { idt_type, idt_farm } = semenDto

        const semen = this.create()
        semen.idt_type = idt_type
        semen.idt_farm = idt_farm

        try {
            await semen.save()
            return semen
        } catch (error) {
            throw new InternalServerErrorException('Erro no servidor!')
        }
    }
}