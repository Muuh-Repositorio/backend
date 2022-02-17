import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class SemenDto {
    @ApiProperty()
    @IsNotEmpty({ message: "Raça não inserida!" })
    idt_type: number

    @ApiProperty()
    @IsNotEmpty({ message: "Fazenda não inserida!" })
    idt_farm: number
}