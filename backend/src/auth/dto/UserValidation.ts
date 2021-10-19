import { ApiProperty } from "@nestjs/swagger"

export class UserValidation {
    @ApiProperty()
    idt_user: number

    @ApiProperty()
    name: string

    @ApiProperty()
    access_token: string
}