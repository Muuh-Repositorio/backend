import { IsNotEmpty } from "class-validator"

export class AuthDto {
    @IsNotEmpty({ message: 'CPF não informado!'})
    cpf: string
    
    @IsNotEmpty({ message: "Senha não informada" })
    password: string
}