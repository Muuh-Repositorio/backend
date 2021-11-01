import { Injectable } from "@nestjs/common";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { AbleDate } from "src/utils/calculations/AbleDate";
import { GetCowById } from "./GetCowById.service";
import { GetCowsBySituation } from "./GetCowsBySituation.service";

@Injectable()
export class GetCowsForInsemination implements ServiceCommand{
    constructor(
        private getAbleCows: GetCowsBySituation,
        private getCowsByID: GetCowById
    ){}

    async execute(idt_farm: number): Promise<any[]>{
        const cows = []
        const ableCows = await this.getAbleCows.execute(idt_farm, Situations.getID(Situations.ABLE))
        
        for(const cow of ableCows){
            const weight = (await this.getCowsByID.execute(cow.idt_cow)).weight
            
            if(ableCows && weight >= 350){
                cows.push({
                    idt_farm: cow.idt_farm,
                    idt_cow: cow.idt_cow,
                    name: cow.name
                })
            }
        }

        return cows

    }
}