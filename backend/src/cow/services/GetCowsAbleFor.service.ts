import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { ReadSQL } from "src/utils/services/ReadSQL.service";
import { getManager } from "typeorm";
import { AbleSituations } from "../interfaces/AbleSituations.enum";

export class GetCowsAbleFor implements ServiceCommand {
    async execute(situation: AbleSituations, idt_farm: number) {
        const readSQL = new ReadSQL()

        const file = `cow/sql/${situation}.sql`
        const query = await readSQL.execute(file, "idFarm", idt_farm)

        const database = getManager()
        const result = database.query(query)
        
        return result
    }
}