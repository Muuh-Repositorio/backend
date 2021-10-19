import { CalculatorCommand } from "src/Interfaces/CalculatorCommand";
import * as moment from "moment";
// Criar cálculo de Aptidão (Data Apta = Data do Parto + 60 dias )

export class AbleDate implements CalculatorCommand{
    calculate(temp: string): string{
        const americanDate = moment(temp, "DD MM YYYY").toString()
        const milisecTempDate = Date.parse(americanDate)
        const milisec60days = 5184000000 
        const ableDate = new Date(milisecTempDate + milisec60days).toLocaleDateString()

        return ableDate
    }
}

const teste = new AbleDate()
console.log(teste.calculate("24/09/2021"))