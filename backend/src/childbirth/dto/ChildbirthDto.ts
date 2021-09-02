import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";


export class ChildbirthDto{

    @ApiProperty()
    @IsNotEmpty({ message: 'Vaca não informada!' })
    idt_cow: number

    @ApiProperty()
    @IsNotEmpty({ message: 'Data do parto não informada! '})
    childbirth_date: Date

}