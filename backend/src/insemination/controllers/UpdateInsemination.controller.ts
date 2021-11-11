import { Body, Controller, Param, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { UpdateInseminationDto } from "../dto/UpdateInseminationDto";
import { UpdateInsemination } from "../services/UpdateInsemination.service";

@ApiTags('Insemination')
@Controller('/api/insemination/:idt_insemination')
export class UpdateInseminationController implements ControllerCommand{
    constructor(
        private updateInsemination: UpdateInsemination
    ){}

    @Put()
    @ApiOperation({ summary: "Atualizar as informações de uma inseminação" })
    @ApiResponse({ status: 201, description: "Inseminação atualizada com sucesso!"})
    @ApiResponse({ status: 500, description: "Erro com o servidor!"})
    async handle(@Body() inseminationDTO: UpdateInseminationDto, @Param('idt_insemination') idt_insemination: number){
        return await this.updateInsemination.execute(inseminationDTO, idt_insemination)
    }
}