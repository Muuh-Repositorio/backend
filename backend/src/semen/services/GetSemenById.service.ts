import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { Semen } from "../entity/Semen.entity";
import { SemenRepository } from "../repository/SemenRepository";

@Injectable()
export class GetSemenById implements ServiceCommand {
    constructor(
        @InjectRepository(SemenRepository)
        private semenRepository: SemenRepository
    ) {}

    async execute(idt_semen: number): Promise<Semen> {
        return await this.semenRepository.findOne({ idt_semen: idt_semen })
    }
}