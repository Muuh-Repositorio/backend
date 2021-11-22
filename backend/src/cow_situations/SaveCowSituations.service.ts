import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { getManager } from "typeorm";
import { CowSituations } from "./CowSituations.entity";
import { Situations } from "./Situations.enum";

export class SaveCowSituations implements ServiceCommand {

    async execute(): Promise<void> {
        const database = getManager()
        const count = Number((await database.query('select count(*) from cow_situations;'))[0].count)
        if (count >= 0) {
            let situation = Situations.HEIFER;
            for (let i = 0; i < 6; i++) {
                const data = database.create(CowSituations)
                data.idt_situation = Situations.getID(situation)
                data.situation = situation
                data.save()
                situation = Situations.next(situation)
            }

            const others = [ Situations.SOLD, Situations.DEAD ]
            for (let i = 0; i < others.length; i++) {
                const data = database.create(CowSituations)
                data.idt_situation = Situations.getID(others[i])
                data.situation = others[i]
                data.save()
            }
        }
    }
}