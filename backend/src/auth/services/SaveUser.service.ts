import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { AuthDto } from "../dto/AuthDto";
import { Email } from "../entity/Email";
import { Users } from "../entity/User.entity";
import { UserResponse } from "../interfaces/UserResponse";
import { SaveUserInDatabase } from "../repository/SaveUserInDatabase";
import { EmailBuilder } from "./EmailBuilder";
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

        const route = `localhost:3000/api/user/${user.idt_user}/email_validation` // Trocar o localhost

        const email_info: Email = new EmailBuilder()
                                .from("Teste")
                                .to(authDto.email)
                                .subject("Teste")
                                .text(`Teste: ${route}`)
                                .html(`<h1>Olá!</h1> Verifique seu e-mail aqui: <a href="${route}">${route}</a>`)
                                .build()

        await this.sendEmail.execute(email_info)
        
        return {
            idt_user: user.idt_user,
            cpf: user.cpf,
            email: user.email,
            name: user.name
        }
    }
}