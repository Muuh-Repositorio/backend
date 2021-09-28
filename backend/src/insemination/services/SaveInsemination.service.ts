import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { InseminationDto } from "../dto/InseminationDto";
import { InseminationResponse } from "../interfaces/InseminationResponse";
import { InseminationRepository } from "../repository";
import { SaveInseminationInDatabase } from "../repository/SaveInseminationInDatabase";

@Injectable()
export class SaveInsemination implements ServiceCommand {

    constructor(
        @InjectRepository(SaveInseminationInDatabase)
        private saveInseminationInDatabase: SaveInseminationInDatabase,
        private inseminationRepository: InseminationRepository
    ) {}

    async execute(inseminationDto: InseminationDto): Promise<InseminationResponse> {
        const exist = await this.inseminationRepository.findOne({idt_cow: inseminationDto.idt_cow})
        if(exist) {
            this.saveInseminationInDatabase.update(exist.idt_insemination, { insemination_date: inseminationDto.insemination_date})
        }

        const insemination = await this.saveInseminationInDatabase.execute(inseminationDto);
        
        return {
            idt_insemination: insemination.idt_insemination,
            idt_cow: insemination.idt_cow,
            insemination_date: insemination.insemination_date
        }
    }
}