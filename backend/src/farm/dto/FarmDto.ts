import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class FarmDto {

    @ApiProperty()
    @IsNotEmpty({ message: "Dono da fazenda não informado!" })
    idt_user: number

    @ApiProperty()
    @IsNotEmpty({ message: "SEI não informado!" })
    sei: string

    @ApiProperty()
    @IsOptional()
    name: string
}