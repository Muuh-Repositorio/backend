import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { SemenRepository } from "../repository/SemenRepository";

@Injectable()
export class DeleteSemen implements ServiceCommand {
    constructor(
        @InjectRepository(SemenRepository)
        private semenRepository: SemenRepository
    ) {}

    async execute(idt_semen: number) {
        await this.semenRepository.delete({ idt_semen: idt_semen })
    }
}