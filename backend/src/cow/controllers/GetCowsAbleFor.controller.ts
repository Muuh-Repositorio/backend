import { Controller, Get, Param, Query } from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { AbleSituations } from "../interfaces/AbleSituations.enum";
import { GetCowsAbleFor } from "../services/GetCowsAbleFor.service";

@ApiTags('Cow')
@Controller('/api/cow/farm/:idt_farm/able')
export class GetCowsAbleForController implements ControllerCommand {
    constructor(private getCowsAbleFor: GetCowsAbleFor) {}

    @Get()
    @ApiOperation({ summary: "Listar vacas aptas" })
    @ApiResponse({ status: 200, description: "Vacas retornadas com sucesso!"})
    @ApiResponse({ status: 404, description: "Vacas não encontradas!"})
    @ApiResponse({ status: 500, description: "Erro no servidor!"})
    @ApiQuery({ name: 'for', enum: AbleSituations })
    async handle(@Param('idt_farm') idt_farm: number, @Query() query: AbleSituations) {
        return await this.getCowsAbleFor.execute(query['for'], idt_farm)
    }
}