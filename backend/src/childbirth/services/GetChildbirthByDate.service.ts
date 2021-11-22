import { Injectable } from "@nestjs/common";
import { CowRepository } from "src/cow/repository";
import { GetCowById } from "src/cow/services";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { Childbirth } from "../entity/Childbirth.entity";
import { ChildbirthRepository } from "../repository/ChildbirthRepository";

@Injectable()
export class GetChildbirthByDate implements ServiceCommand{
    constructor(
        private childbirthRepository: ChildbirthRepository
    ){}

    async execute(date: string): Promise<Childbirth[]>{

        const cows = [] 
        const childbirths = await this.childbirthRepository.find({ childbirth_date: date })
        
        for(const cow of childbirths){
            cows.push({
                idt_cow: cow.idt_cow,
                childbirth_date: cow.childbirth_date
            })
        }

        return cows
    }
}