import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { GetCowsForInsemination } from "../services/GetCowsForInsemination";

@ApiTags('Cow')
@Controller('api/cow/farm/:idt_farm/situation/able')
export class GetCowsForInseminationController implements ControllerCommand{
    constructor(
        private getAbleCows: GetCowsForInsemination
    ){}

    @Get()
    @ApiOperation({ summary: "Listar vacas aptas para inseminação" })
    @ApiResponse({ status: 200, description: "Vacas retornadas com sucesso!"})
    async handle(@Param('idt_farm') idt_farm): Promise<any[]> {

        return await this.getAbleCows.execute(idt_farm)
    }
}