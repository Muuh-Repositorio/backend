import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { WeightHistoryDto } from "../dto/WeightHistoryDto";
import { WeightHistory } from "../entity/WeightHistory.entity";
import { SaveWeightInDatabase } from "../repository/SaveWeightInDatabase";

@Injectable()
export class SaveWeight implements ServiceCommand {
    constructor(
        @InjectRepository(SaveWeightInDatabase)
        private saveWeightInDatabase: SaveWeightInDatabase
    ) {}

    async execute(weightDto: WeightHistoryDto): Promise<WeightHistory> {
        return await this.saveWeightInDatabase.execute(weightDto);
    }
}