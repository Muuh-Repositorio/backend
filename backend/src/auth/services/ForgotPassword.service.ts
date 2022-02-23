import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { UserRepository } from "../repository";
import { randomBytes } from 'crypto'
import { SendEmail } from ".";
import { Email } from "src/utils/services/email/Email";
import { EmailBuilder } from "src/utils/services/email/EmailBuilder";

@Injectable()
export class ForgotPassword implements ServiceCommand {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private sendEmail: SendEmail
    ) {}

    async execute(email: string): Promise<any> {
        const user = await this.userRepository.findOne({ email: email })

        if (!user) throw new NotFoundException('Usuário não encontrado!')

        const token = randomBytes(20).toString('hex')

        const now = new Date()
        now.setHours(now.getHours() + 1)

        await this.userRepository.update({ idt_user: user.idt_user }, { passwordResetToken: token, passwordResetExpires: now })

        const route = `localhost:8080/resetPassword/${ token }`

        const email_info: Email = new EmailBuilder()
                                    .from("Teste")
                                    .to(email)
                                    .subject('Senha esquecida')
                                    .text(`Teste: ${ route }`)
                                    .html(`<h1>Olá!</h1> Refaça sua senha aqui: <a href="${route}">${route}</a>`)
                                    .build()

        this.sendEmail.execute(email_info)
    }
}