import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { ChildbirthDto } from "../dto/ChildbirthDto";
import { Childbirth } from "../entity/childbirth.entity";
import { SaveChildbirthInDatabase } from "../repository/SaveChildbirthInDatabase";

@Injectable()
export class SaveChildbirth implements ServiceCommand{
    constructor(
        @InjectRepository(SaveChildbirthInDatabase)
        private saveChildbirthInDatabase: SaveChildbirthInDatabase
    ){}

    async execute(childbirthDto: ChildbirthDto): Promise<Childbirth>{
        return await this.saveChildbirthInDatabase.execute(childbirthDto)
    }
}