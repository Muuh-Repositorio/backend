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
        
        const param1 = Number.isInteger(Number(cowParam)) ? cowParam : 0
        const param2 = Number.isInteger(Number(cowParam)) ? null : cowParam

        const query = await readSQL.execute(file, ["cowParam", "cowParam" ,'idFarm'], [param1, param2, idt_farm])
        const database = getManager()
        const result = await database.query(query)

        const data = {
            ...result[0],
            inseminations: await this.getInseminationsByCow.execute(result[0].idt_cow),
            childbirths: await this.getChildbirthByCow.execute(result[0].idt_cow)
        }

        return data
    }
}