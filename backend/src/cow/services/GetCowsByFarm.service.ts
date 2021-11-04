import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { ReadSQL } from "src/utils/services/ReadSQL.service";
import { getManager } from "typeorm";

export class GetCowsByFarm implements ServiceCommand {

    async execute(idt_farm: number): Promise<any[]> {
        const readSQL = new ReadSQL()
        const file = 'cow/sql/GetAllCows.sql'
        const query = await readSQL.execute(file, ["idFarm"], [idt_farm])

        const database = getManager()
        const result = await database.query(query)
        return result.map((cow: any) => {
            return {
                idt_cow: cow.idt_cow,
                code: cow.code,
                name: cow.name,
                weight: cow.weight,
                birth_date: cow.birth_date === null ? null : new Date(cow.birth_date).toLocaleDateString('pt-BR'),
                type: cow.type,
                lastbirth: cow.lastbirth === null ? null : new Date(cow.lastbirth).toLocaleDateString('pt-BR'),
                lastinsemination:cow.lastinsemination === null ? null : new Date(cow.lastinsemination).toLocaleDateString('pt-BR'),
                diagnosis: cow.diagnosis === true ? 'Positivo' : cow.diagnosis === false ? 'Negativo' : null,
                idt_situation: cow.idt_situation
            }
        })
    }
}