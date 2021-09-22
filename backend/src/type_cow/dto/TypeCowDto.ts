import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";


export class TypeCowDto{

    @ApiProperty()
    @IsNotEmpty({ message: 'Tipo não informado!'})
    type: string
    
}