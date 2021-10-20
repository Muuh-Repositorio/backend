import { Injectable } from "@nestjs/common";
import { GetChildbirthByCow } from "src/childbirth/services/GetChildbirthByCow.service";
import { Situations } from "src/cow_situations/Situations.enum";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { AbleDate } from "src/utils/calculations/AbleDate";
import { BRtoUS } from "src/utils/calculations/BRtoUS";
import { GetCowById } from "./GetCowById.service";
import { GetCowsBySituation } from "./GetCowsBySituation.service";

//VACAS APTAS PARA INSEMINAÇÃO APÓS O PARTO

@Injectable()
export class GetAbleCowsAfterChildbirth implements ServiceCommand{
    constructor(
        private getCowsBySituations: GetCowsBySituation,
        private getChildbirthByCow: GetChildbirthByCow,
        private getAbleDate: AbleDate,
        private getCowByID: GetCowById,
        private BRtoUS: BRtoUS
    ){}

    async execute(idt_farm: number): Promise<any[]>{
        const cows = []
        const birth = await this.getCowsBySituations.execute(idt_farm, Situations.PARIDA)
        
        for(const cow of birth){
            const childbirth_date = (await this.getChildbirthByCow.execute(cow.idt_cow)).childbirth_date
            const weight = (await this.getCowByID.execute(cow.idt_cow)).weight
            const able_date = this.getAbleDate.calculate(childbirth_date)
            const able_date_US = this.BRtoUS.calculate(able_date)
            const able_date_millisec = Date.parse(able_date_US)
            const today = Date.now()

            if(able_date_millisec <= today && weight >= 350){
                cows.push({
                    idt_farm: cow.idt_farm,
                    idt_cow: cow.idt_cow,
                    name: cow.name,
                    able_date: able_date
                })
            }

        }

        return cows
    }
}