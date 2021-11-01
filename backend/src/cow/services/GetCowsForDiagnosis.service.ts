import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cow } from "src/cow/entity/Cow.entity";
import { GetCowsBySituation } from "src/cow/services";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { DiagnosisDate } from "src/utils/calculations/DiagnosisDate";
import { GetInseminationByCow } from "../../insemination/services";
import { InseminationRepository } from "../../insemination/repository";

@Injectable()
export class GetCowsForDiagnosis implements ServiceCommand {
    constructor(
        private getCowsBySituations: GetCowsBySituation,
        private getInseminationByCow: GetInseminationByCow,
        private diagnosisDate: DiagnosisDate
    ) {}

    async execute(idt_farm: number): Promise<any[]> {
        const cows = []
        const inseminatedCows = await this.getCowsBySituations.execute(idt_farm, Situations.getID(Situations.INSEMINATED))
        
        const today = new Date().toLocaleDateString()
        for (const cow of inseminatedCows) {
            const insemination_date = (await this.getInseminationByCow.execute(cow.idt_cow)).insemination_date
            const diagnosisDate_ = this.diagnosisDate.calculate(insemination_date)
                   
            if (diagnosisDate_ <= today) {
                cows.push({
                    idt_farm: cow.idt_farm,
                    idt_cow: cow.idt_cow,
                    name: cow.name,
                    diagnosisDate: diagnosisDate_
                })
            }
        }

        return cows;
    }
}