import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiProperty, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { Semen } from "../entity/Semen.entity";
import { GetAllSemensByFarm } from "../services/GetAllSemensByFarm.service";

@ApiTags('Semen')
@Controller('/api/semen/:idt_farm')
export class GetAllSemensByFarmController implements ControllerCommand {
    constructor(private getAllSemensByFarm: GetAllSemensByFarm) {}

    @Get()
    @ApiOperation({ summary: "Listar todos os semêns por fazenda" })
    @ApiResponse({ status: 201, description: "Sêmens retornados com sucesso!"})
    @ApiResponse({ status: 500, description: "Erro com o servidor!"})
    async handle(@Param('idt_farm') idt_farm: number): Promise<Semen[]> {
        return await this.getAllSemensByFarm.execute(idt_farm)
    }
}