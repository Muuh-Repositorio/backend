import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { GetCowsForDrying } from "../services/GetCowsForDrying.service";

@ApiTags('Cow')
@Controller('/api/cow/farm/:idt_farm/drying')
export class GetCowsForDryingController implements ControllerCommand{
    constructor(
        private getCowsForDrying: GetCowsForDrying
    ){}

    @Get()
    @ApiOperation({ summary: "Listar vacas aptas para secagem" })
    @ApiResponse({ status: 200, description: "Vacas retornadas com sucesso!"})
    async handle(@Param('idt_farm') idt_farm: number): Promise<any[]> {
        return await this.getCowsForDrying.execute(idt_farm)
    }
}