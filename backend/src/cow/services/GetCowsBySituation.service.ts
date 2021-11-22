import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { Cow } from "../entity/Cow.entity";
import { CowRepository } from "../repository";

@Injectable()
export class GetCowsBySituation implements ServiceCommand {
    constructor(
        @InjectRepository(CowRepository)
        private cowRepository: CowRepository
    ) {}

    async execute(idt_farm: number, idt_situation: number): Promise<Cow[]> {
        return await this.cowRepository.find({ idt_farm: idt_farm, idt_situation: idt_situation})
    }
}