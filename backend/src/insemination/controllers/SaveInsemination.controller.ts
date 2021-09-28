import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { InseminationDto } from "../dto/InseminationDto";
import { InseminationResponse } from "../interfaces/InseminationResponse";
import { SaveInsemination } from "../services/SaveInsemination.service";

@ApiTags('Insemination')
@Controller('/api/insemination')
export class SaveInseminationController implements ControllerCommand {

    constructor(private saveInsemination: SaveInsemination) {}

    @Post()
    @ApiOperation({ summary: "Cadastrar uma inseminação" })
    @ApiResponse({ status: 201, description: "Inseminação cadastrada com sucesso!"})
    @ApiResponse({ status: 409, description: "Alguma informação passada já existe!"})
    @ApiResponse({ status: 500, description: "Erro com o servidor!"})
    handle(@Body() inseminationDto: InseminationDto): Promise<InseminationResponse> {
        return this.saveInsemination.execute(inseminationDto)
    }
}