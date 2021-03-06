import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { ReadJSON } from "src/utils/services/ReadJSON.service";
import { getManager } from "typeorm";
import { TypeCow } from "../entity/TypeCow.entity";
import { Types } from "../interfaces/Types";

export class SaveCowTypes implements ServiceCommand {
    async execute(): Promise<void> {
        const readJSON = new ReadJSON()
        const file = 'type_cow/json/Types.json'

        const types: Types[] = await readJSON.execute(file)
        const database = getManager()
        
        for (const type of types) {
            const data = database.create(TypeCow)
            data.idt_type = type.id
            data.type = type.name
            data.ideal_weight = type.weight
            data.ideal_age = type.age

            data.save()
        }
    }
}