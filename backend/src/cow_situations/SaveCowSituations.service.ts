import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { ReadJson } from "src/utils/ReadJson";
import { getManager } from "typeorm";
import { CowSituations } from "./CowSituations.entity";

export class SaveCowSituations implements ServiceCommand {

    async execute(): Promise<void> {
        const file = new ReadJson()
        const situations = await file.execute('src/cow_situations/situations.json')
        
        const database = getManager()
        const exist = database.query('select * from cow_situations;')
        
        if (!exist) {
            for (let i = 0; i < situations.length; i++) {
                const data = database.create(CowSituations)
                data.idt_situation = situations[i]['idt']
                data.situation = situations[i]['situation']
                data.save()
            }
        }
    }
}