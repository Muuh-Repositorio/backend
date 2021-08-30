import * as bcrypt from 'bcrypt'
import { ServiceCommand } from "src/Interfaces/ServiceCommand";

export class HashPassword implements ServiceCommand {
    async execute(password: string, salt: string): Promise<String> {
        return bcrypt.hashSync(password, salt)
    }
}