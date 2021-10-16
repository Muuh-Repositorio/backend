import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import * as fs from 'fs'

export class ReadJson implements ServiceCommand {
    async execute(path: string) {
        const data = fs.readFileSync(path, "utf-8")
        return JSON.parse(data)
    }
}