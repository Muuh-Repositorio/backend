import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { InseminationResponse } from "../interfaces/InseminationResponse";
import { InseminationRepository } from "../repository/InseminationRepository";

@Injectable()
export class GetInseminationByCow implements ServiceCommand {
    constructor(
        @InjectRepository(InseminationRepository)
        private inseminationRepository: InseminationRepository,
    ) {}

    async execute(idt_cow: number): Promise<InseminationResponse> {
        const insemination = await this.inseminationRepository.findOne({ idt_cow: idt_cow })

        if(!insemination) {
            throw new NotFoundException('Inseminação não encontrada!')
        }

        return {
            idt_insemination: insemination.idt_insemination,
            idt_cow: insemination.idt_cow,
            insemination_date: insemination.insemination_date
        }
    }
}