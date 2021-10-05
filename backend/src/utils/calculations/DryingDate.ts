import { CalculatorCommand } from "src/Interfaces/CalculatorCommand";
import moment from "moment";

// Criar cálculo de secagem (Data Secagem = Data de inseminação + 210 dias )

export class DryingDate implements CalculatorCommand{
    calculate(inseminationDate: string): string{
        const americanDate = moment(inseminationDate, "DD MM YYYY").toString() //TRANSFORMA NOSSO ESTILO DE DATA EM AMERICANO (MM/DD/YYYY)
        const milisecInseminationDate = Date.parse(americanDate) //TRANSFORMA A DATA AMERICANA EM MILISSEGUNDOS
        const milisec210days = 18144000000 //210 DIAS EM MILISSEGUNDOS
        const milisecDryingDate = milisecInseminationDate + milisec210days //SOMA A DATA DE INSEMINÇÃO COM OS 210 DIAS (EM MILISSEGUNDOS)
        const dryingDate = new Date(milisecDryingDate).toLocaleDateString() //DATA NO FORMATO BRASILEIRO

        return dryingDate

    }

}

const teste = new DryingDate()
console.log(teste.calculate("23/09/2021"))