import { Body, Controller, Param, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { UpdateCowDto } from "../dto/UpdateCowDto";
import { CowResponse } from "../interfaces/CowResponse";
import { UpdateCow } from "../services/UpdateCow.service";

@ApiTags('Cow')
@Controller('/api/cow/:idt_cow')
export class UpdateCowController implements ControllerCommand {
    constructor(private updateCow: UpdateCow) {}

    @Put()
    @ApiOperation({ summary: "Atualizar as informações de uma vaca" })
    @ApiResponse({ status: 201, description: "Vaca atualizada com sucesso!"})
    @ApiResponse({ status: 500, description: "Erro com o servidor!"})
    async handle(@Body() cowDto: UpdateCowDto, @Param('idt_cow') idt_cow: number): Promise<CowResponse> {
        return await this.updateCow.execute(cowDto, idt_cow)
    }
}
