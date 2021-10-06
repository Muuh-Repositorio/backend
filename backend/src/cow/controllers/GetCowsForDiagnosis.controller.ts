import { Controller, Get, Param } from "@nestjs/common"
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"
import { ControllerCommand } from "src/Interfaces/ControllerCommand"
import { Cow } from "../entity/Cow.entity"
import { GetCowsForDiagnosis } from "../services/GetCowsForDiagnosis.service"

@ApiTags('Cow')
@Controller('/api/cow/farm/:idt_farm/diagnosis')
export class GetCowsForDiagnosisController implements ControllerCommand {
    constructor(private getCowsForDiagnosis: GetCowsForDiagnosis) {}

    @Get()
    @ApiOperation({ summary: "Listar vacas pela aptas para serem diagnosticadas" })
    @ApiResponse({ status: 200, description: "Vacas retornadas com sucesso!"})
    async handle(@Param('idt_farm') idt_farm: number): Promise<any[]> {
        return await this.getCowsForDiagnosis.execute(idt_farm)
    }
}