import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import * as fs from 'fs'

export class ReadJSON implements ServiceCommand {
    async execute(file: string): Promise<any> {
        const path = `src/${file}`
        return JSON.parse(fs.readFileSync(path).toString())
    }
}