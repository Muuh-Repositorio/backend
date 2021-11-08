import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { UpdateCowDto } from "../dto/UpdateCowDto";
import { CowResponse } from "../interfaces/CowResponse";
import { UpdateCowInDatabase } from "../repository/UpdateCow";

@Injectable()
export class UpdateCow implements ServiceCommand {
    constructor(
        @InjectRepository(UpdateCowInDatabase)
        private updateCowInDatabase: UpdateCowInDatabase
    ) {}

    async execute(cowDto: UpdateCowDto, idt_cow: number): Promise<any> {
       return await this.updateCowInDatabase.execute(cowDto, idt_cow)
    }
}