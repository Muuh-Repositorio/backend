import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { TypeCowDto } from "../dto/TypeCowDto";
import { TypeCowResponse } from "../interfaces/TypeCowResponse";
import { SaveTypeCow } from "../services/SaveTypeCow.service";

@ApiTags('Cow')
@Controller('api/cow/type_cow')
export class SaveTypeCowController implements ControllerCommand{
    constructor(
        private saveTypeCow: SaveTypeCow
    ){}

    @Post()
    @ApiOperation({ summary: "Cadastrar um tipo de gado" })
    @ApiResponse({ status: 201, description: "Tipo de gado cadastrado com sucesso!" })
    @ApiResponse({ status: 409, description: "Alguma informação passada já existe!" })
    @ApiResponse({ status: 500, description: "Erro com o servidor!" })
    handle(@Body() typecowDto: TypeCowDto): Promise<TypeCowResponse>{
        return this.saveTypeCow.execute(typecowDto)
    }
}