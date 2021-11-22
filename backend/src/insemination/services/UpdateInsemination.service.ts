import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { InseminationDto } from "../dto/InseminationDto";
import { UpdateInseminationInDatabase } from "../repository/UpdateInsemination";

@Injectable()
export class UpdateInsemination implements ServiceCommand{
    constructor(
        @InjectRepository(UpdateInseminationInDatabase)
        private updateInseminationInDatabase: UpdateInseminationInDatabase
    ){}

    async execute(inseminationDTO: InseminationDto, idt_insemination: number){
        return await this.updateInseminationInDatabase.execute(inseminationDTO, idt_insemination)
    }
}