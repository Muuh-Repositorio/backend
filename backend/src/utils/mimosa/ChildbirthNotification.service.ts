import { Childbirth } from "src/childbirth/entity/childbirth.entity";
import { ChildbirthRepository } from "src/childbirth/repository/ChildbirthRepository";
import { GetChildbirthByDate } from "src/childbirth/services/GetChildbirthByDate.service";

export class Notification{
    //DATA DE PARTO
    //DATA DE INSEMINAÇÃO
    //DATA DE SECAGEM
    //DATA DE DIAGNÓSTICO
    //DATA DE APTIDÃO PÓS PARTO

    constructor(
        private x: GetChildbirthByDate
    ){}

    async teste(){
        const childbirthDate = new ChildbirthRepository()
        console.log(childbirthDate)
        
        // const today = new Date(Date.now())
        // today.setHours(-3, 0, 0, 0) //ZERAR HORA, MINUTO, SEGUNDO E MILISSEGUINDO DA DATA DE HOJE
        // const todayMillisec = Date.parse(today.toUTCString())
        // const threeDaysMillisec = 259200000
        // const threeDaysBeforeTodayMillisec = todayMillisec - threeDaysMillisec
        // const threeDaysBeforeTodayDate = (new Date(threeDaysBeforeTodayMillisec).getUTCFullYear() + '-' + (new Date(threeDaysBeforeTodayMillisec).getUTCMonth() + 1) + '-' + new Date(threeDaysBeforeTodayMillisec).getUTCDate()).toString()

        const teste = await this.x.execute('20201013')

        console.log(teste)

        return teste
    }

}