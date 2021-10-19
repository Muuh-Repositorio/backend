import { Injectable } from "@nestjs/common";
//import { GetChildbirthByCow } from "src/childbirth/services/GetChildbirthByCow.service";
import { Situations } from "src/cow_situations/Situations.enum";
import { GetInseminationByCow } from "src/insemination/services";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
//import { DiagnosisDate } from "src/utils/calculations/DiagnosisDate";
import { DryingDate } from "src/utils/calculations/DryingDate";
import { GetCowsBySituation } from "./GetCowsBySituation.service";

@Injectable()
export class GetCowsForDrying implements ServiceCommand {
    constructor(
        private getCowsBySituations: GetCowsBySituation,
        private dryingDate: DryingDate,
        private getInseminationByCow: GetInseminationByCow,
        //private diagnosisDate: DiagnosisDate
    ){}

    async execute(idt_farm: number): Promise<any[]>{
        const cows = []
        const pregnantCows = await this.getCowsBySituations.execute(idt_farm, Situations.EMPRENHADA) //TODAS AS VACAS PRENHAS
        
        for(const cow of pregnantCows){
            //const diagnosis_date = await this.diagnosisDate.calculate(insemination_date) //DATA DE DIAGNÓSTICO DA VACA
            //const diagnosis_date_millisec = Date.parse(diagnosis_date) //DATA DE DIAGNÓSTICO DA VACA EM MILISSEGUNDOS
            //const millissec170days = 14688000000 
            const insemination_date = (await this.getInseminationByCow.execute(cow.idt_cow)).insemination_date //DATA DE INSEMINAÇÃO DA VACA   
            const today = Date.now() //DATA DO DIA CORRENTE EM MILISSEGUNDOS
            const drying_date = this.dryingDate.calculate(insemination_date)   
            const drying_date_millisec = new Date(drying_date).getMilliseconds()
            
            if(today >= drying_date_millisec){
                cows.push({
                    idt_farm: cow.idt_farm,
                    idt_cow: cow.idt_cow,
                    name: cow.name,
                    dryingDate: drying_date
                })
            }

            return cows;

        }
    }
}

