import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { EntityRepository, Repository } from "typeorm";
import { FarmDto } from "../dto/FarmDto";
import { Farm } from "../entity/Farm.entity";

@EntityRepository(Farm)
export class SaveFarmInDatabase extends Repository<Farm> implements ServiceCommand {
    
    async execute(farmDto: FarmDto): Promise<Farm> {
        const { name, sei, idt_user } = farmDto

        const farm = this.create()

        farm.name = name
        farm.sei = sei
        farm.user = idt_user

        try {
            await farm.save()

            return farm
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('Fazenda já cadastrada!')
            } else {
                throw new InternalServerErrorException('Erro no servidor!')
            }
        }
    }
}