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
        return await this.semenRepository.find({ idt_farm: idt_farm })
    }
}