import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { createTestAccount, createTransport, getTestMessageUrl } from 'nodemailer'
import { EmailConfiguration, EmailInfo } from "../interfaces/EmailConfiguration";
require('dotenv').config()

export class SendEmail implements ServiceCommand {
    
    private productionEmail: EmailConfiguration = {
        service: 'gmail',
        auth: {
            user: 'email',
            pass: 'senha'
        }
    }

    async execute(email: string, route: string): Promise<void> {
        const emailConfiguration = await this.makeEmailConfiguration()
        const transport = createTransport(emailConfiguration)
        
        const info = await transport.sendMail(this.makeEmail(email, route))

        if (process.env.NODE_ENV !== 'production') {
            console.log('URL: ' + getTestMessageUrl(info))
        }
    }

    private async makeEmailConfiguration(): Promise<any> {
        if (process.env.NODE_ENV === 'production') {
            return this.productionEmail
        } else {
            const testEmail = await createTestAccount()
            return {
                host: 'smtp.ethereal.email',
                auth: testEmail
            }
        }
    }

    private makeEmail(email: string, route: string): EmailInfo {
        return {
            from: "Teste",
            to: email,
            subject: "Teste",
            text: `Teste: ${route}`,
            html: `<h1>Olá!</h1> Verifique seu e-mail aqui: <a href="${route}">${route}</a>`
        }
    }
}
