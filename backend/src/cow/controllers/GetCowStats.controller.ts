import { Controller, Get, Param, Query } from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { GetCowStats } from "../services/GetCowsStats.service";

@ApiTags('Cow')
@Controller('/api/cow/farm/:idt_farm/stats')
export class GetCowStatsController implements ControllerCommand {
    constructor(private getCowStats: GetCowStats) {}

    @Get()
    @ApiOperation({ summary: "Listar estatísticas de uma vaca" })
    @ApiResponse({ status: 200, description: "Informações retornadas com sucesso!"})
    @ApiResponse({ status: 500, description: "Erro no servidor!"})
    @ApiQuery({ name: 'cowParam' })
    async handle(@Param('idt_farm') idt_farm: number, @Query() param: any) {
        return await this.getCowStats.execute(param.cowParam, idt_farm)
    }
}