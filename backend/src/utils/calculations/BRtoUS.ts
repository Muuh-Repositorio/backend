import { CalculatorCommand } from "src/Interfaces/CalculatorCommand";
import * as moment from "moment";

export class BRtoUS implements CalculatorCommand{
    calculate(BRdate: string): string{
            const americanDate = moment(BRdate, "YYYY MM DD").toString()
    
            return americanDate;
    }
}