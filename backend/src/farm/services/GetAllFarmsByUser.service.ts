import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { Farm } from "../entity/Farm.entity";
import { FarmRepository } from "../repository";

@Injectable()
export class GetAllFarmsByUser implements ServiceCommand {
    constructor(
        @InjectRepository(FarmRepository)
        private farmRepository: FarmRepository
    ) {}

    async execute(idt_user: number): Promise<Farm[]> {
        const farms = await this.farmRepository.find({ user: idt_user })
        return farms
    }
}