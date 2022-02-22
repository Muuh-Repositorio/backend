import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { Childbirth } from "../entity/Childbirth.entity";
import { GetBirthsByFarm } from "../services/GetBirthsByFarm.service";

@ApiTags('Childbirth')
@Controller('api/childbirth/farm/:idt_farm')
export class GetBirthsByFarmController implements ControllerCommand {
    constructor(
        private getBirthsByFarm: GetBirthsByFarm
    ) {}
    
    @Get()
    @ApiOperation({ summary: "Listar todos os partos de uma fazenda" })
    @ApiResponse({ status: 200, description: "Vaca retornado com sucesso!"})
    @ApiResponse({ status: 404, description: "Vaca não encontrada!"})
    @ApiResponse({ status: 500, description: "Erro no servidor!"})
    async handle(@Param('idt_farm') idt_farm: number): Promise<Childbirth[]> {
        return await this.getBirthsByFarm.execute(idt_farm)
    }
}