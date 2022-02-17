import { ApiProperty } from "@nestjs/swagger";

export class UpdateInseminationDto {
    @ApiProperty()
    diagnosis: any

    @ApiProperty()
    insemination_date: string

    @ApiProperty()
    idt_cow: number
}