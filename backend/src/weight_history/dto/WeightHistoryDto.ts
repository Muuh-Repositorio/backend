import { IsNotEmpty } from "class-validator";

export class WeightHistoryDto {
    @IsNotEmpty({ message: 'ID da vaca não informado!' })
    idt_cow: number

    @IsNotEmpty({ message: "Peso não informado!" })
    weight: number
}