import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import * as fs from 'fs'

export class ReadSQL implements ServiceCommand {
    async execute(file: string, replace: string[], value: any[]): Promise<string> {
        const path = `src/${file}`
        let query = fs.readFileSync(path).toString()
        for (let i = 0; i < replace.length; i++) {
            query = query.replace(replace[i], value[i])
        }
        return query
    }
}