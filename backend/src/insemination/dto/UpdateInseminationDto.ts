import { ApiProperty } from "@nestjs/swagger";

export class UpdateInseminationDto {
    @ApiProperty()
    diagnosis: boolean

    @ApiProperty()
    insemination_date: string

    @ApiProperty()
    idt_cow: number
}