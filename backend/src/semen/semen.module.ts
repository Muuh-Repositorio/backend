import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SaveSemenController } from "./controllers/SaveSemen.controller";
import { SaveSemenInDatabase } from "./repository/SaveSemenInDatabase";
import { SaveSemen } from "./services/SaveSemen.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            SaveSemenInDatabase
        ])
    ],
    controllers: [
        SaveSemenController
    ],
    providers: [
        SaveSemen
    ]
})
export class SemenModule {}