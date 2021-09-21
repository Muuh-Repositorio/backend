import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { InseminationDto } from "../dto/InseminationDto";
import { InseminationResponse } from "../interfaces/InseminationResponse";
import { SaveInseminationInDatabase } from "../repository/SaveInseminationInDatabase";

@Injectable()
export class SaveInsemination implements ServiceCommand {

    constructor(
        @InjectRepository(SaveInseminationInDatabase)
        private saveInseminationInDatabase: SaveInseminationInDatabase,
    ) {}

    async execute(inseminationDto: InseminationDto): Promise<InseminationResponse> {
        const insemination = await this.saveInseminationInDatabase.execute(inseminationDto);
        
        return {
            idt_insemination: insemination.idt_insemination,
            idt_cow: insemination.idt_cow,
            insemination_date: insemination.insemination_date
        }
    }
}