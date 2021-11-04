import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { ReadSQL } from "src/utils/services/ReadSQL.service";
import { getManager } from "typeorm";
import { AbleSituations } from "../interfaces/AbleSituations.enum";

export class GetCowsAbleFor implements ServiceCommand {
    async execute(situation: AbleSituations, idt_farm: number = 0) {
        const readSQL = new ReadSQL()

        const file = `cow/sql/${situation}.sql`
        const days = AbleSituations.getDaysFor(situation)

        let query = ''
        if (idt_farm === 0) {
            query = await readSQL.execute(file, ["and idt_farm = idFarm", "days_", "current_date"], ['', days, "current_date - 3"])
        } else {
            query = await readSQL.execute(file, ["idFarm", "days_"], [idt_farm, days])
        }

        const database = getManager()
        const result = database.query(query)
        
        return result
    }
}