import { ApiProperty } from "@nestjs/swagger"
import { Equals, IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator"

export class UserDto {

    @ApiProperty()
    @IsNotEmpty({ message: "Nome não informado!" })
    name: string

    @ApiProperty()
    @IsNotEmpty({ message: "Email não informado!" })
    @IsEmail({}, { message: "Precisa ser um tipo de email válido!"})
    email: string

    @ApiProperty()
    @IsNotEmpty({ message: "CPF não informado!" })
    @MinLength(11, { message: 'O número de CPF precisa ter 11 dígitos!'})
    @MaxLength(11, { message: 'O número de CPF precisa ter 11 dígitos!'})
    cpf: string

    @ApiProperty()
    @IsNotEmpty({ message: "Telefone não informado!" })
    phone: string

    @ApiProperty()
    @IsNotEmpty({ message: "Senha não informada!" })
    password: string

    @ApiProperty()
    @IsNotEmpty({ message: "Confirmação de senha não informada! "})
    confirmPassword: string
}