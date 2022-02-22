import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DeleteSemenController } from "./controllers/DeleteSemen.controller";
import { GetAllSemensByFarmController } from "./controllers/GetAllSemensByFarm.controller";
import { SaveSemenController } from "./controllers/SaveSemen.controller";
import { SaveSemenInDatabase } from "./repository/SaveSemenInDatabase";
import { SemenRepository } from "./repository/SemenRepository";
import { DeleteSemen } from "./services/DeleteSemen.service";
import { GetAllSemensByFarm } from "./services/GetAllSemensByFarm.service";
import { GetSemenById } from "./services/GetSemenById.service";
import { SaveSemen } from "./services/SaveSemen.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            SaveSemenInDatabase,
            SemenRepository
        ])
    ],
    controllers: [
        SaveSemenController,
        DeleteSemenController,
        GetAllSemensByFarmController
    ],
    providers: [
        SaveSemen,
        GetSemenById,
        DeleteSemen,
        GetAllSemensByFarm
    ],
    exports: [
        GetSemenById,
        DeleteSemen
    ]
})
export class SemenModule {}