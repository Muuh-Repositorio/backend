import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { Insemination } from "../entity/Insemination.entity";
import { InseminationRepository } from "../repository/InseminationRepository";

@Injectable()
export class ListInseminations implements ServiceCommand {
    constructor(
        @InjectRepository(InseminationRepository)
        private inseminationRepository: InseminationRepository,
    ) {}

    async execute(): Promise<Insemination[]> {
        const inseminations = await this.inseminationRepository.find()

        if(!inseminations) {
            throw new NotFoundException('Não existe nenhum registro!')
        }

        return inseminations
    }
}