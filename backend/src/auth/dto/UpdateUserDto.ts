import { ApiProperty } from "@nestjs/swagger"

export class UpdateUserDto {
    @ApiProperty()
    email?: string

    @ApiProperty()
    phone?: string
}