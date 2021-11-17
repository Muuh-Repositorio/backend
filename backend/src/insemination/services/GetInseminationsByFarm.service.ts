import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { ReadSQL } from "src/utils/services/ReadSQL.service";
import { Insemination } from "../entity/Insemination.entity";
import { InseminationRepository } from "../repository/InseminationRepository";

@Injectable()
export class GetInseminationsByFarm implements ServiceCommand {
    constructor(
        @InjectRepository(InseminationRepository)
        private inseminationRepository: InseminationRepository,
    ) {}

    async execute(idt_farm: number): Promise<Insemination[]> {
        const readSQL = new ReadSQL()

        const file = `insemination/sql/InseminationsByFarm.sql`
        const query = await readSQL.execute(file, ["idFarm"], [idt_farm])
        const inseminations = await this.inseminationRepository.query(query)

        if(!inseminations) {
            throw new NotFoundException('Não existe nenhum registro!')
        }

        return inseminations
    }
}