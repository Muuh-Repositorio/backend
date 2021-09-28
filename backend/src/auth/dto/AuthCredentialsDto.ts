import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class AuthDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'CPF não informado!'})
    cpf: string
    
    @ApiProperty()
    @IsNotEmpty({ message: "Senha não informada" })
    password: string
}