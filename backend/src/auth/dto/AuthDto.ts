import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty } from "class-validator"

export class AuthDto {

    @ApiProperty()
    @IsNotEmpty({ message: "Nome não informado!" })
    name: string

    @ApiProperty()
    @IsNotEmpty({ message: "Email não informado!" })
    @IsEmail({}, { message: "Precisa ser um tipo de email válido!"})
    email: string

    @ApiProperty()
    @IsNotEmpty({ message: "CPF não informado!" })
    cpf: string

    @ApiProperty()
    @IsNotEmpty({ message: "Senha não informada!" })
    password: string
}