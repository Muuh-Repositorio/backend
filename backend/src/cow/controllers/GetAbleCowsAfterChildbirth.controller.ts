import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { GetAbleCowsAfterChildbirth } from "../services/GetAbleCowsAfterChildbirth";

@ApiTags('Cow')
@Controller('api/cow/farm/:idt_farm/able')
export class GetAbleCowsAfterChildbirthController implements ControllerCommand{
    constructor(
        private getAbleCows: GetAbleCowsAfterChildbirth
    ){}

    @Get()
    @ApiOperation({ summary: "Listar vacas aptas para secagem" })
    @ApiResponse({ status: 200, description: "Vacas retornadas com sucesso!"})
    async handle(@Param('idt_farm') idt_farm: number): Promise<any[]> {
        return await this.getAbleCows.execute(idt_farm)
    }
}