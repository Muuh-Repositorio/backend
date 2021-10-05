import { CalculatorCommand } from "src/Interfaces/CalculatorCommand";
import { CalculatedDate } from "./CalculatedDate.interface";

export class DiagnosisDate implements CalculatorCommand {
    calculate(inseminationDate: string): string {
        const calculatedDate: CalculatedDate = {
            day: Number(inseminationDate.split('/')[0]) + 40,
            month: Number(inseminationDate.split('/')[1]) - 1,
            year: Number(inseminationDate.split('/')[2])
        }

        const date: Date = new Date(calculatedDate.year, calculatedDate.month, calculatedDate.day)

        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }
}

