import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { CowResponse } from "../interfaces/CowResponse";
import { CowRepository } from "../repository/CowRepository";

@Injectable()
export class GetCowById implements ServiceCommand {
    constructor(
        @InjectRepository(CowRepository)
        private cowRepository: CowRepository,
    ) {}

    async execute(idt_cow: number): Promise<CowResponse> {
        const cow = await this.cowRepository.findOne({ idt_cow: idt_cow })

        if(!cow) {
            throw new NotFoundException('Vaca não encontrada!')
        }

        return {
            idt_cow: cow.idt_cow,
            idt_situation: cow.idt_situation,
            idt_farm: cow.idt_farm,
            idt_type: cow.idt_type,
            code: cow.code,
            name: cow.name,
            weight: cow.weight,
            birth_date: cow.birth_date
        }
    }
}