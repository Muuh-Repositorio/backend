import { Body, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { FarmDto } from "../dto/FarmDto";
import { Farm } from "../entity/Farm.entity";
import { SaveFarm } from "../services";

export class SaveFarmController implements ControllerCommand {
    
    constructor(private saveFarm: SaveFarm) {}

    @Post()
    @ApiOperation({ summary: "Cadastrar uma fazenda" })
    @ApiResponse({ status: 201, description: "Fazenda cadastrada com sucesso!"})
    @ApiResponse({ status: 409, description: "Alguma informação passada já existe!"})
    @ApiResponse({ status: 500, description: "Erro com o servidor!"})
    handle(@Body() farmDto: FarmDto): Promise<Farm> {
        return this.saveFarm.execute(farmDto)
    }
}