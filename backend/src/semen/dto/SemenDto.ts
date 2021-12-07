import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class SemenDto {
    @ApiProperty()
    @IsNotEmpty({ message: "Raça não inserida!" })
    idt_type: number
}