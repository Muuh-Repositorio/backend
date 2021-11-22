import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CowParamsDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'Peso da vaca não informado!' })
    weight: number

    @ApiProperty()
    @IsNotEmpty({ message: 'Data de nascimento da vaca não informada!'})
    birth_date: string

    @ApiProperty()
    @IsNotEmpty({ message: "Raça da vaca não informada!" })
    idt_type: number
}