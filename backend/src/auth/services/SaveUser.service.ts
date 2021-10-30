import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { UserDto } from "../dto/UserDto";
import { Email } from "../../utils/services/email/Email";
import { UserResponse } from "../interfaces/UserResponse";
import { SaveUserInDatabase } from "../repository/SaveUserInDatabase";
import { EmailBuilder } from "../../utils/services/email/EmailBuilder";
import { HashPassword } from "./HashPassword.service";
import { SendEmail } from "../../utils/services/email/SendEmail.service";

@Injectable()
export class SaveUser implements ServiceCommand {

    constructor(
        @InjectRepository(SaveUserInDatabase)
        private saveUserInDatabase: SaveUserInDatabase,
        private hashPassword: HashPassword,
        private sendEmail: SendEmail
    ) {}

    async execute(userDto: UserDto): Promise<UserResponse> {
        if (userDto.password !== userDto.confirmPassword) {
            throw new BadRequestException('Senhas não conferem!')
        }

        const hashedPassword = await this.hashPassword.execute(userDto.password)
        userDto.password = hashedPassword

        const user = await this.saveUserInDatabase.execute(userDto);

        const route = `localhost:3000/api/user/${user.idt_user}/email_validation` // Trocar o localhost

        const email_info: Email = new EmailBuilder()
                                .from("Teste")
                                .to(userDto.email)
                                .subject("Teste")
                                .text(`Teste: ${route}`)
                                .html(`<h1>Olá!</h1> Verifique seu e-mail aqui: <a href="${route}">${route}</a>`)
                                .build()

        await this.sendEmail.execute(email_info)
        
        return {
            idt_user: user.idt_user,
            cpf: user.cpf,
            email: user.email,
            phone: user.phone,
            name: user.name
        } 
    }
}