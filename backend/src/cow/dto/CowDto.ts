import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CowDto {

    @ApiProperty()
    @IsNotEmpty({ message: "Situação não informada!" })
    idt_situation: number

    @ApiProperty()
    @IsNotEmpty({ message: "Usuário não informado!" })
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
    @IsNotEmpty({ message: "Data de nascimento não informada!" })
    birth_date: Date
}