import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { CowDto } from "../dto/CowDto";
import { CowResponse } from "../../cow/interfaces/CowResponse";
import { SaveCowInDatabase } from "../../cow/repository/SaveCowInDatabase";
import { ValidateCow } from "./ValidateCow.service";
import { Situations } from "src/cow_situations/Situations.enum";
import { CowParamsDto } from "../dto/CowParamsDto";
import { SaveWeight } from "src/weight_history/services/SaveWeight.service";

@Injectable()
export class SaveCow implements ServiceCommand {

    constructor(
        @InjectRepository(SaveCowInDatabase)
        private saveCowInDatabase: SaveCowInDatabase,
        private validateCow: ValidateCow,
        private saveWeightHistory: SaveWeight
    ) {}

    async execute(cowDto: CowDto): Promise<CowResponse> {
        const cowParams: CowParamsDto = { 
            birth_date: new Date(cowDto.birth_date).toLocaleDateString('pt-BR'),
            weight: Number(cowDto.weight),
            idt_type: Number(cowDto.idt_type) 
        }

        let idt_situation;
        const cowIsValid = await this.validateCow.execute(cowParams)
        if (cowIsValid) {
            idt_situation = Situations.getID(Situations.ABLE)
        } else {
            idt_situation = Situations.getID(Situations.HEIFER)
        }

        const cow = await this.saveCowInDatabase.execute(cowDto, idt_situation);
        await this.saveWeightHistory.execute({ idt_cow: cow.idt_cow, weight: cow.weight })
        
        return {
            idt_cow: cow.idt_cow,
            idt_situation: cow.idt_situation,
            gender: cow.gender,
            idt_farm: cow.idt_farm,
            idt_type: cow.idt_type,
            code: cow.code,
            name: cow.name,
            weight: cow.weight,
            birth_date: cow.birth_date
        }
    }
}