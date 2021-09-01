import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { CowDto } from "../dto/CowDto";
import { CowResponse } from "../../cow/interfaces/CowResponse";
import { SaveCowInDatabase } from "../../cow/repository/SaveCowInDatabase";

@Injectable()
export class SaveCow implements ServiceCommand {

    constructor(
        @InjectRepository(SaveCowInDatabase)
        private saveCowInDatabase: SaveCowInDatabase,
    ) {}

    async execute(cowDto: CowDto): Promise<CowResponse> {
        const cow = await this.saveCowInDatabase.execute(cowDto);
        
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