import { ApiProperty } from "@nestjs/swagger";

export class UpdateCowDto {
    @ApiProperty()
    weight?: number

    @ApiProperty()
    idt_farm?: number
}