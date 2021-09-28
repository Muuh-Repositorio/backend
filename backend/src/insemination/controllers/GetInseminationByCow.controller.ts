import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { InseminationResponse } from "../interfaces/InseminationResponse";
import { GetInseminationByCow } from "../services"

@ApiTags('Insemination')
@Controller('/api/insemination/:idt_insemination')
export class GetInseminationByCowController implements ControllerCommand {
    constructor(private getInseminationById: GetInseminationByCow) {}

    @Get()
    @ApiOperation({ summary: "Listar uma inseminação pela vaca" })
    @ApiResponse({ status: 200, description: "Inseminação retornada com sucesso!"})
    @ApiResponse({ status: 404, description: "Inseminação não encontrada!"})
    @ApiResponse({ status: 500, description: "Erro no servidor!"})
    handle(@Param('idt_insemination') idt_insemination: number): Promise<InseminationResponse> {
        return this.getInseminationById.execute(idt_insemination);
    }
}