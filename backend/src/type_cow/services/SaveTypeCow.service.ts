import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { TypeCowDto } from "../dto/TypeCowDto";
import { TypeCowResponse } from "../interfaces/TypeCowResponse";
import { SaveTypeCowInDatabase } from "../repository/SaveTypeCowInDatabase";

@Injectable()
export class SaveTypeCow implements ServiceCommand{
    constructor(
        @InjectRepository(SaveTypeCowInDatabase)
        private saveTypeCowInDatabase: SaveTypeCowInDatabase
    ){}

    async execute(typecowDto: TypeCowDto): Promise<TypeCowResponse>{
        return this.saveTypeCowInDatabase.execute(typecowDto)
    }
}
