import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { Childbirth } from "../entity/Childbirth.entity";
import { ChildbirthResponse } from "../interfaces/ChildbirthResponse";
import { GetChildbirthByCow } from "../services/GetChildbirthByCow.service";

@ApiTags('Cow')
@Controller('api/childbirth/:idt_cow')
export class ChildbirthByCowController implements ControllerCommand{
    constructor(
        private getChildbirthByCow: GetChildbirthByCow
    ){}

    @Get()
    @ApiOperation({ summary: "Listar uma vaca pelo ID" })
    @ApiResponse({ status: 200, description: "Vaca retornado com sucesso!"})
    @ApiResponse({ status: 404, description: "Vaca não encontrada!"})
    @ApiResponse({ status: 500, description: "Erro no servidor!"})
    handle(@Param('idt_cow') idt_cow: number): Promise<Childbirth[]> {
        return this.getChildbirthByCow.execute(idt_cow);
    }
}