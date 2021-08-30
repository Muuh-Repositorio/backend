import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { AuthDto } from "../dto/AuthDto";
import { Users } from "../entity/User.entity";
import { UserResponse } from "../interfaces/UserResponse";
import { SaveUserInDatabase } from "../repository/SaveUserInDatabase";
import { HashPassword } from "./HashPassword.service";
import { SendEmail } from "./SendEmail.service";

@Injectable()
export class SaveUser implements ServiceCommand {

    constructor(
        @InjectRepository(SaveUserInDatabase)
        private saveUserInDatabase: SaveUserInDatabase,
        private hashPassword: HashPassword,
        private sendEmail: SendEmail
    ) {}

    async execute(authDto: AuthDto): Promise<UserResponse> {
        const hashedPassword = await this.hashPassword.execute(authDto.password)
        authDto.password = hashedPassword

        const user = await this.saveUserInDatabase.execute(authDto);

        const route = `localhost:3000/api/user/${user.idt_user}/email` // Trocar o localhost

        await this.sendEmail.execute(authDto.email, route)
        
        return {
            idt_user: user.idt_user,
            cpf: user.cpf,
            email: user.cpf,
            name: user.name
        }
    }
}