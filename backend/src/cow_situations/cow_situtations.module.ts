import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CowSituationsDatabase } from "./CowSituationsDatabase";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            CowSituationsDatabase
        ])
    ],
})
export class CowSituationsModule {}