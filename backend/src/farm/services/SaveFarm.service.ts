import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GetUserById } from "src/auth/services";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { FarmDto } from "../dto/FarmDto";
import { Farm } from "../entity/Farm.entity";
import { SaveFarmInDatabase } from "../repository";

@Injectable()
export class SaveFarm implements ServiceCommand {
    
    constructor(
        @InjectRepository(SaveFarmInDatabase)
        private saveFarmInDatabase: SaveFarmInDatabase,
        private getUserById: GetUserById
    ) {}

    async execute(farmDto: FarmDto): Promise<Farm> {
        return await this.saveFarmInDatabase.execute(farmDto)
    }
}