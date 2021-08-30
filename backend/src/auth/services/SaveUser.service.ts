import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { AuthDto } from "../dto/AuthDto";
import { User } from "../entity/User.entity";
import { SaveUserInDatabase } from "../repository/SaveUserInDatabase";

@Injectable()
export class SaveUser implements ServiceCommand {

    constructor(
        @InjectRepository(SaveUserInDatabase)
        private saveUserInDatabase: SaveUserInDatabase
    ) {}

    async execute(authDto: AuthDto): Promise<User> {
        return await this.saveUserInDatabase.execute(authDto);
    }
}