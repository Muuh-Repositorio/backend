import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { CowResponse } from "../interfaces/CowResponse";
import { GetCowById } from "../services"

@ApiTags('Cow')
@Controller('/api/cow/:idt_cow')
export class GetCowByIdController implements ControllerCommand {
    constructor(private getCowById: GetCowById) {}

    @Get()
    @ApiOperation({ summary: "Listar uma vaca pelo ID" })
    @ApiResponse({ status: 200, description: "Vaca retornado com sucesso!"})
    @ApiResponse({ status: 404, description: "Vaca não encontrada!"})
    @ApiResponse({ status: 500, description: "Erro no servidor!"})
    handle(@Param('idt_cow') idt_cow: number): Promise<CowResponse> {
        return this.getCowById.execute(idt_cow);
    }
}