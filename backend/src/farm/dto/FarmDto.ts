import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class FarmDto {

    @ApiProperty()
    @IsNotEmpty({ message: "Dono da fazenda não informado!" })
    idt_user: number

    @ApiProperty()
    @IsNotEmpty({ message: "CNPJ não informado!" })
    cnpj: string

    @ApiProperty()
    @IsOptional()
    name: string
}