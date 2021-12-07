import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SaveSemenController } from "./controllers/SaveSemen.controller";
import { SaveSemenInDatabase } from "./repository/SaveSemenInDatabase";
import { SemenRepository } from "./repository/SemenRepository";
import { DeleteSemen } from "./services/DeleteSemen.service";
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
        SaveSemenController
    ],
    providers: [
        SaveSemen,
        GetSemenById,
        DeleteSemen
    ],
    exports: [
        GetSemenById,
        DeleteSemen
    ]
})
export class SemenModule {}