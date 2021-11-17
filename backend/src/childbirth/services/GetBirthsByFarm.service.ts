import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { ReadSQL } from "src/utils/services/ReadSQL.service";
import { Childbirth } from "../entity/Childbirth.entity";
import { ChildbirthRepository } from "../repository/ChildbirthRepository";

@Injectable()
export class GetBirthsByFarm implements ServiceCommand {
    constructor(
        @InjectRepository(ChildbirthRepository)
        private childBirthRepository: ChildbirthRepository
    ) {}

    async execute(idt_farm: number): Promise<Childbirth[]> {
        const readSQL = new ReadSQL()

        const file = 'childbirth/sql/BirthsByFarm.sql'
        const query = await readSQL.execute(file, ['idFarm'], [idt_farm])
        const births = await this.childBirthRepository.query(query)

        return births
    }
}