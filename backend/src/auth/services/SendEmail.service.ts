import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { createTestAccount, createTransport, getTestMessageUrl } from 'nodemailer'
import { EmailConfiguration, EmailInfo } from "../interfaces/EmailConfiguration";
import { Email } from "../entity/Email";
require('dotenv').config()

export class SendEmail implements ServiceCommand {
    
    private productionEmail: EmailConfiguration = {
        service: 'gmail',
        auth: {
            user: 'email',
            pass: 'senha'
        }
    }

    async execute(email_info: Email): Promise<void> {
        const emailConfiguration = await this.makeEmailConfiguration()
        const transport = createTransport(emailConfiguration)
        
        const info = await transport.sendMail(email_info.values())

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
}
