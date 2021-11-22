import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdateCow } from "src/cow/services/UpdateCow.service";
import { Situations } from "src/cow_situations/Situations.enum";
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
        private updateCow: UpdateCow
    ) {}

    async execute(inseminationDto: InseminationDto): Promise<InseminationResponse> {
        const insemination = await this.saveInseminationInDatabase.execute(inseminationDto);
        this.updateCow.execute({ situation: Situations.getID(Situations.INSEMINATED) }, inseminationDto.idt_cow)
        
        return {
            idt_insemination: insemination.idt_insemination,
            idt_cow: insemination.idt_cow,
            insemination_date: insemination.insemination_date
        }
    }
}