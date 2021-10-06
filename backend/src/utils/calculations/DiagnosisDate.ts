import * as moment from 'moment';
import { CalculatorCommand } from "src/Interfaces/CalculatorCommand";

export class DiagnosisDate implements CalculatorCommand {
    calculate(inseminationDate: string): string {
        const americanDate = moment(inseminationDate, "YYYY MM DD").toString() //TRANSFORMA NOSSO ESTILO DE DATA EM AMERICANO (MM/DD/YYYY)
        const milisecInseminationDate = Date.parse(americanDate) //TRANSFORMA A DATA AMERICANA EM MILISSEGUNDOS
        const milisec40days = 3456000000 //40 DIAS EM MILISSEGUNDOS
        const milisecDiagnosisDate = milisecInseminationDate + milisec40days //SOMA A DATA DE DIAGNÓSTICO COM OS 40 DIAS (EM MILISSEGUNDOS)
        const diagnosisDate = new Date(milisecDiagnosisDate).toLocaleDateString() //DATA NO FORMATO BRASILEIRO

        return diagnosisDate
    }
}

