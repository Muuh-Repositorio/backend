import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { GetInseminationsByFarm } from "../services";
import { Insemination } from "../entity/Insemination.entity";


@ApiTags('Insemination')
@Controller('/api/insemination/farm/:idt_farm')
export class GetInseminationsByFarmController implements ControllerCommand {
    constructor(private getInseminationsByFarm: GetInseminationsByFarm) {}

    @Get()
    @ApiOperation({ summary: "Listar inseminações por fazenda" })
    @ApiResponse({ status: 200, description: "Inseminações retornada com sucesso!"})
    @ApiResponse({ status: 404, description: "Inseminações não encontradas!"})
    @ApiResponse({ status: 500, description: "Erro no servidor!"})
    async handle(@Param('idt_farm') idt_farm: number): Promise<Insemination[]> {
        return await this.getInseminationsByFarm.execute(idt_farm);
    }
}