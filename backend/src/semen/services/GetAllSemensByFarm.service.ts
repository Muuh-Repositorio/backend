import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { Semen } from "../entity/Semen.entity";
import { SemenRepository } from "../repository/SemenRepository";

@Injectable()
export class GetAllSemensByFarm implements ServiceCommand {
    constructor(
        @InjectRepository(SemenRepository)
        private semenRepository: SemenRepository
    ) {}

    async execute(idt_farm: number): Promise<Semen[]> {
        const semens = await this.semenRepository.manager.query(
            `SELECT
                IDT_SEMEN
            ,   TC.TYPE
            ,   USED
            FROM 
                SEMEN S
                JOIN TYPE_COW TC
                    ON TC.IDT_TYPE = S.IDT_TYPE
            WHERE S.IDT_FARM = ${idt_farm}`
        )
        return semens
    }
}