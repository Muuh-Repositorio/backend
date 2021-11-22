import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GetWeightHistoryByCowController } from "./controllers/GetWeightHistoryByCow.controller";
import { WeightHistory } from "./entity/WeightHistory.entity";
import { SaveWeightInDatabase } from "./repository/SaveWeightInDatabase";
import { WeightHistoryRepository } from "./repository/WeightHistoryRespository";
import { SaveWeight } from "./services/SaveWeight.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            WeightHistory,
            SaveWeightInDatabase,
            WeightHistoryRepository
        ])
    ],
    controllers: [
        GetWeightHistoryByCowController
    ],
    providers: [
        SaveWeight
    ],
    exports: [
        SaveWeight
    ]
})
export class WeightHistoryModule {}
