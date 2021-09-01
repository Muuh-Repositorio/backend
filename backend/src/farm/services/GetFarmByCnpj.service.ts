import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { Farm } from "../entity/Farm.entity";
import { FarmRepository } from "../repository";

@Injectable()
export class GetFarmByCnpj implements ServiceCommand {
    constructor(
        @InjectRepository(FarmRepository)
        private farmRepository: FarmRepository
    ) {}

    async execute(cnpj: string): Promise<Farm> {
        return await this.farmRepository.findOne({ cnpj: cnpj })
    }
}