import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class InseminationDto {

    @ApiProperty()
    @IsNotEmpty({ message: "Vaca não informada!" })
    idt_cow: number

    @ApiProperty()
    @IsNotEmpty({ message: "Data de inseminação não informado!" })
    insemination_date: Date
}