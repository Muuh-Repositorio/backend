import { getManager } from "typeorm";
import { AbleDate } from "../calculations/AbleDate";
import { DiagnosisDate } from "../calculations/DiagnosisDate";
import { DryingDate } from "../calculations/DryingDate";
import { Functions } from "./generalFunctions";

export class Notification{

    dateFunctions = new Functions().dates()
    functions = new Functions()
    manager = getManager()
    
    async main(client: any){
        // await this.childbirth(client)
        // await this.drying(client)
        // await this.diagnosis(client)
        // await this.ableAfterChildbirth(client)
    }

    async childbirth(client: any){
        const responseTodayChildbirth = await this.functions.querys(this.dateFunctions.todayBRString, 'childbirth')

        const responseThreeDaysBeforeChildbirth = await this.functions.querys(this.dateFunctions.threeDaysAfterBRString, 'childbirth')

        if(responseTodayChildbirth.length > 0){
            this.functions.sendText(client, responseTodayChildbirth, 'mimosinha(s) está/estão prevista(s) para nascer *hoje*', '🐄❤️')
        }

        if(responseThreeDaysBeforeChildbirth.length > 0){
            this.functions.sendText(client, responseThreeDaysBeforeChildbirth, 'mimosinha(s) está/estão prevista(s) para nascer em *3️⃣ dias*', '*Fique atento* ⌛🐄') 
        }
    }
    
    async drying(client: any){  
        const inseminationDates = await this.manager.query('select * from insemination')

        let insemination_date_three_days = ''
        let insemination_date_today = ''

        for (let i = 0; i < inseminationDates.length; i++) {
            const dryingDate = new DryingDate().calculate(inseminationDates[i].insemination_date)

            if(this.dateFunctions.todayBRString === dryingDate){
                insemination_date_today = inseminationDates[i].insemination_date.toLocaleDateString()
            }else if(this.dateFunctions.threeDaysAfterBRString === dryingDate){
                insemination_date_three_days = inseminationDates[i].insemination_date.toLocaleDateString()
            }
        }
        
        if(insemination_date_three_days != ''){
            const responseThreeDaysAfterDrying = await this.functions.querys(insemination_date_three_days, 'insemination')

            this.functions.sendText(client, responseThreeDaysAfterDrying, 'mimosinha(s) está/estarão apta(s) para iniciar/iniciarem a secagem daqui a *3️⃣ dias*', '🥛🥛🥛')
        }

        if(insemination_date_today != ''){
            const responseTodayDrying = await this.functions.querys(insemination_date_today, 'insemination')

            this.functions.sendText(client, responseTodayDrying, 'mimosinha(s) está/estão apta(s) para iniciar/iniciarem a secagem *hoje*', '🥛🥛🥛')
        }
    }

    async diagnosis(client: any){       
        const inseminationDates = await this.manager.query('select * from insemination')
        
        let insemination_date_three_days = ''
        let insemination_date_today = ''
        
        for (let i = 0; i < inseminationDates.length; i++) {
            const diagnosisDate = new DiagnosisDate().calculate(inseminationDates[i].insemination_date)
            
            if(this.dateFunctions.todayBRString === diagnosisDate){
                insemination_date_today = inseminationDates[i].insemination_date.toLocaleDateString()
            }else if(this.dateFunctions.threeDaysAfterBRString === diagnosisDate){
                insemination_date_three_days = inseminationDates[i].insemination_date.toLocaleDateString()
            }
        }
        
        if(insemination_date_today != ''){
            const responseTodayDiagnosis = await this.functions.querys(insemination_date_today, 'insemination') 
            console.log(responseTodayDiagnosis)
            
            this.functions.sendText(client, responseTodayDiagnosis, 'mimosinha(s) está/estão apta(s) para ser/serem diagnosticada(s) *hoje*', '🩺🐄')
        }
        
        if(insemination_date_three_days != ''){
            const responseThreeDaysBeforeDiagnosis = await this.functions.querys(insemination_date_three_days, 'insemination')
            
            this.functions.sendText(client, responseThreeDaysBeforeDiagnosis, 'mimosinha(s) estarão apta(s) para iniciar/iniciarem a secagem daqui a *3️⃣ dias*', '🩺🐄`')
        }
    }

    async ableAfterChildbirth(client: any){
        const childbirthDates = await this.manager.query('select * from childbirth')

        let able_date_three_days_after = ''
        let able_date_today = ''

        for (let i = 0; i < childbirthDates.length; i++) {
            const ableDate = new AbleDate().calculate(childbirthDates[i].childbirth_date)

            if(this.dateFunctions.todayBRString === ableDate){
                able_date_today = childbirthDates[i].childbirth_date.toLocaleDateString()
            }else if(this.dateFunctions.threeDaysAfterBRString === ableDate){
                able_date_three_days_after = childbirthDates[i].childbirth_date.toLocaleDateString()
            }
        }

        if(able_date_today != ''){
            const responseTodayAbleCows = await this.functions.querys(able_date_today, 'childbirth')

            this.functions.sendText(client, responseTodayAbleCows, 'mimosinha(s) está/estão apta(s) para ser/serem inseminada(s) *a partir de hoje*', '🐄')
        }

        if(able_date_three_days_after != ''){
            const responseThreeDaysBeforeAbleCows = await this.functions.querys(able_date_three_days_after, 'childbirth')

            this.functions.sendText(client, responseThreeDaysBeforeAbleCows, 'mimosinha(s) está/estão apta(s) para ser/serem inseminada(s) *daqui a 3️⃣ dias*', '🐄')
        }

    }

}