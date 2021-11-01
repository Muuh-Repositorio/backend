import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import * as fs from 'fs'

export class ReadSQL implements ServiceCommand {
    async execute(file: string, replace: string, value: any): Promise<string> {
        const path = `src/${file}`
        return fs.readFileSync(path).toString().replace(replace, value)
    }
}