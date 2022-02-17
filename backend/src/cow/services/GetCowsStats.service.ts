import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GetChildbirthByCow } from "src/childbirth/services/GetChildbirthByCow.service";
import { InseminationRepository } from "src/insemination/repository";
import { GetInseminationsByCow } from "src/insemination/services/GetInseminationsByCow.service";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { ReadSQL } from "src/utils/services/ReadSQL.service";
import { getManager } from "typeorm";
import { CowRepository } from "../repository";

@Injectable()
export class GetCowStats implements ServiceCommand {
    constructor(
        private getInseminationsByCow: GetInseminationsByCow,
        private getChildbirthByCow: GetChildbirthByCow
    ) {}

    async execute(cowParam: any, idt_farm: number) {
        const readSQL = new ReadSQL()
        const file = 'cow/sql/GetCowStats.sql'

        const query = await readSQL.execute(file, ["cowParam", "cowParam" ,'idFarm'], [cowParam, `'${cowParam}'`, idt_farm])
        const database = getManager()
        let result = await database.query(query)

        const data = {
            last_weight: new Date(result[0].last_weight).toLocaleDateString('pt-Br'),
            idt_cow: result[0].idt_cow,
            name: result[0].name,
            code: result[0].code,
            weight: result[0].weight,
            birth_date: new Date(result[0].birth_date).toLocaleDateString('pt-Br'),
            type: result[0].type,
            situation: result[0].situation,
            total_childbirths: result[0].total_childbirths,
            total_inseminations: result[0].total_inseminations,
            last_insemination: new Date(result[0].last_insemination).toLocaleDateString('pt-Br'),
            last_childbirth: new Date(result[0].last_childbirth).toLocaleDateString('pt-Br'),
            inseminations: await this.getInseminationsByCow.execute(result[0].idt_cow),
            childbirths: await this.getChildbirthByCow.execute(result[0].idt_cow)
        }

        return data
    }
}