import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class ResetPasswordDto {
    @ApiProperty()
    @IsNotEmpty({ message: "Email não informado!" })
    email: string
    
    @ApiProperty()
    @IsNotEmpty({ message: "Token não informado!" })
    token: string

    @ApiProperty()
    @IsNotEmpty({ message: 'Insira sua nova senha!' })
    newPassword: string

    @ApiProperty()
    @IsNotEmpty({ message: 'Confirmação de senha não digitada!'})
    confirmNewPassword: string
}