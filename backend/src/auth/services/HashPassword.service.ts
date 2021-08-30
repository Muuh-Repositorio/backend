import * as bcrypt from 'bcrypt'
import { ServiceCommand } from "src/Interfaces/ServiceCommand";

export class HashPassword implements ServiceCommand {
    async execute(password: string): Promise<string> {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }
}