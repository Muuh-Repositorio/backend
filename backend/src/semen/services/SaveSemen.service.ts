import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { SemenDto } from "../dto/SemenDto";
import { Semen } from "../entity/Semen.entity";
import { SaveSemenInDatabase } from "../repository/SaveSemenInDatabase";

@Injectable()
export class SaveSemen implements ServiceCommand {
    constructor(
        @InjectRepository(SaveSemenInDatabase)
        private saveSemenInDatabase: SaveSemenInDatabase
    ) {}

    async execute(semenDto: SemenDto): Promise<Semen> {
        return await this.saveSemenInDatabase.execute(semenDto)
    }

}