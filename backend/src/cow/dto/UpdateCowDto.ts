import { ApiProperty } from "@nestjs/swagger";
import { Situations } from "src/cow_situations/Situations.enum";

export class UpdateCowDto {
    @ApiProperty()
    weight?: number

    @ApiProperty()
    idt_farm?: number

    @ApiProperty()
    situation?: number
}