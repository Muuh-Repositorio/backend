import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { Insemination } from "../entity/Insemination.entity";
import { InseminationResponse } from "../interfaces/InseminationResponse";
import { InseminationRepository } from "../repository/InseminationRepository";

@Injectable()
export class GetInseminationsByCow implements ServiceCommand {
    constructor(
        @InjectRepository(InseminationRepository)
        private inseminationRepository: InseminationRepository,
    ) {}

    async execute(idt_cow: number): Promise<Insemination[]> {
        const insemination = await this.inseminationRepository.find({ idt_cow: idt_cow })

        if(!insemination) {
            throw new NotFoundException('Inseminação não encontrada!')
        }

        return insemination
    }
}