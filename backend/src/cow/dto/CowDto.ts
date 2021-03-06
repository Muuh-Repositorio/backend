import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsOptional } from "class-validator"

export class CowDto {

    @ApiProperty()
    @IsNotEmpty({ message: "Fazenda não informado!" })
    idt_farm: number

    @ApiProperty()
    @IsNotEmpty({ message: "Tipo da vaca não informado!" })
    idt_type: number

    @ApiProperty()
    @IsNotEmpty({ message: "Código não informado!" })
    code: string

    @ApiProperty()
    @IsNotEmpty({ message: "Nome não informado!" })
    name: string

    @ApiProperty()
    @IsNotEmpty({ message: "Peso não informado!" })
    weight: number

    @ApiProperty()
    @IsNotEmpty({ message: "Sexo não informado! "})
    gender: string

    @ApiProperty()
    @IsNotEmpty({ message: "Data de nascimento não informada!" })
    birth_date: string
}