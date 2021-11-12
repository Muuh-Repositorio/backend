import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WeightHistory } from "./entity/WeightHistory.entity";
import { SaveWeightInDatabase } from "./repository/SaveWeightInDatabase";
import { SaveWeight } from "./services/SaveWeight.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            WeightHistory,
            SaveWeightInDatabase
        ])
    ],
    controllers: [],
    providers: [
        SaveWeight
    ],
    exports: [
        SaveWeight
    ]
})
export class WeightHistoryModule {}
