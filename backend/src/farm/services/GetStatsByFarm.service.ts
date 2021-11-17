import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { GetBirthsByFarm } from "src/childbirth/services/GetBirthsByFarm.service";
import { AbleSituations } from "src/cow/interfaces/AbleSituations.enum";
import { GetCowsBySituation } from "src/cow/services";
import { GetCowsAbleFor } from "src/cow/services/GetCowsAbleFor.service";
import { GetCowsByFarm } from "src/cow/services/GetCowsByFarm.service";
import { Situations } from "src/cow_situations/Situations.enum";
import { GetInseminationsByFarm } from "src/insemination/services";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { Stats } from "../interfaces/Stats";

@Injectable()
export class GetStatsByFarm implements ServiceCommand {
    constructor(
        private getCowsAbleFor: GetCowsAbleFor,
        private getCowsBySituation: GetCowsBySituation,
        private getCowsByFarm: GetCowsByFarm, 
        private getInseminationsByFarm: GetInseminationsByFarm,
        private getBirthsByFarm: GetBirthsByFarm
    ) {}

    async execute(idt_farm: number): Promise<Stats> {
        const able_id = Situations.getID(Situations.ABLE)

        try {
            const result: Stats = { 
                total_cows: (await this.getCowsByFarm.execute(idt_farm)).length,
                number_of_inseminations: (await this.getInseminationsByFarm.execute(idt_farm)).length,
                cows_available: (await this.getCowsBySituation.execute(idt_farm, able_id)).length,
                number_of_childbirths: (await this.getBirthsByFarm.execute(idt_farm)).length,
                cows_able_to_inseminate: (await this.getCowsAbleFor.execute(AbleSituations.INSEMINATE, idt_farm)).length,
                cows_able_to_diagnosing: (await this.getCowsAbleFor.execute(AbleSituations.DIAGNOSIS, idt_farm)).length,
                cows_able_to_drying: (await this.getCowsAbleFor.execute(AbleSituations.DRYING, idt_farm)).length,
                cows_able_to_birth: (await this.getCowsAbleFor.execute(AbleSituations.CHILDBIRTH, idt_farm)).length
            }
            return result
        } catch (error) {
            throw new InternalServerErrorException('Erro com o servidor')
        }

    }
}