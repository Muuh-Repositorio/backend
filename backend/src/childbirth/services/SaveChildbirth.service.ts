import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { ChildbirthDto } from "../dto/ChildbirthDto";
import { ChildbirthResponse } from "../interfaces/ChildbirthResponse";
import { SaveChildbirthInDatabase } from "../repository/SaveChildbirthInDatabase";

@Injectable()
export class SaveChildbirth implements ServiceCommand{
    constructor(
        @InjectRepository(SaveChildbirthInDatabase)
        private saveChildbirthInDatabase: SaveChildbirthInDatabase
    ){}

    async execute(childbirthDto: ChildbirthDto): Promise<ChildbirthResponse>{
        return await this.saveChildbirthInDatabase.execute(childbirthDto)
    }
}