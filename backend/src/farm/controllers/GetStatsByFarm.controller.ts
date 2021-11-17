import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { Stats } from "../interfaces/Stats";
import { GetStatsByFarm } from "../services/GetStatsByFarm.service";

@ApiTags('Farm')
@Controller('api/farm/:idt_farm/stats')
export class GetStatsByFarmController implements ControllerCommand {
    constructor(private getStatsByFarm: GetStatsByFarm) {}

    @Get()
    @ApiOperation({ summary: "Listar as estatísticas de uma fazenda" })
    @ApiResponse({ status: 201, description: "Estatísticas retornadas com sucesso!"})
    @ApiResponse({ status: 500, description: "Erro com o servidor!"})
    async handle(@Param('idt_farm') idt_farm: number): Promise<Stats> {
        return await this.getStatsByFarm.execute(idt_farm)
    }
}