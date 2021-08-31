import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { CowDto } from "../dto/CowDto";
import { CowResponse } from "../../cow/interfaces/CowResponse";
import { SaveCow as SaveCow } from "../../cow/services/SaveCow.service";

@ApiTags('Cow')
@Controller('/api/cow')
export class SaveCowController implements ControllerCommand {

    constructor(private saveCow: SaveCow) {}

    @Post()
    @ApiOperation({ summary: "Cadastrar um vaca" })
    @ApiResponse({ status: 201, description: "Vaca cadastrada com sucesso!"})
    @ApiResponse({ status: 409, description: "Alguma informação passada já existe!"})
    @ApiResponse({ status: 500, description: "Erro com o servidor!"})
    handle(@Body() cowDto: CowDto): Promise<CowResponse> {
        return this.saveCow.execute(cowDto)
    }
}