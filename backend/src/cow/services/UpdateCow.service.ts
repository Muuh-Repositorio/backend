import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { WeightHistoryDto } from "src/weight_history/dto/WeightHistoryDto";
import { SaveWeight } from "src/weight_history/services/SaveWeight.service";
import { UpdateCowDto } from "../dto/UpdateCowDto";
import { Cow } from "../entity/Cow.entity";
import { CowResponse } from "../interfaces/CowResponse";
import { UpdateCowInDatabase } from "../repository/UpdateCow";

@Injectable()
export class UpdateCow implements ServiceCommand {
    constructor(
        @InjectRepository(UpdateCowInDatabase)
        private updateCowInDatabase: UpdateCowInDatabase,
        private saveWeightHistory: SaveWeight
    ) {}

    async execute(cowDto: UpdateCowDto, idt_cow: number): Promise<Cow> {
       const cow = await this.updateCowInDatabase.execute(cowDto, idt_cow)
       if (cowDto.weight) {
           await this.saveWeightHistory.execute({ weight: cow.weight, idt_cow: cow.idt_cow })
       }
       return cow
    }
}