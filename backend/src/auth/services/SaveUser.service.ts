import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { AuthDto } from "../dto/AuthDto";
import { Users } from "../entity/User.entity";
import { SaveUserInDatabase } from "../repository/SaveUserInDatabase";
import { HashPassword } from "./HashPassword.service";

@Injectable()
export class SaveUser implements ServiceCommand {

    constructor(
        @InjectRepository(SaveUserInDatabase)
        private saveUserInDatabase: SaveUserInDatabase,
        private hashPassword: HashPassword
    ) {}

    async execute(authDto: AuthDto): Promise<Users> {
        const hashedPassword = await this.hashPassword.execute(authDto.password)
        authDto.password = hashedPassword

        return await this.saveUserInDatabase.execute(authDto);
    }
}