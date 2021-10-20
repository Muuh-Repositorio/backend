import { CalculatorCommand } from "src/Interfaces/CalculatorCommand";
import * as moment from "moment";
// Criar cálculo de Aptidão (Data Apta = Data do Parto + 60 dias )

export class AbleDate implements CalculatorCommand{
    calculate(childBirthDate: string): string{
        const americanDate = moment(childBirthDate, "YYYY MM DD").toString()
        const milisecTempDate = Date.parse(americanDate)
        const milisec60days = 5184000000 
        const ableDate = new Date(milisecTempDate + milisec60days).toLocaleDateString()

        return ableDate
    }
}
