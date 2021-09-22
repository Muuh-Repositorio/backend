import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { ListInseminations } from "../services";
import { Insemination } from "../entity/Insemination.entity";


@ApiTags('Insemination')
@Controller('/api/insemination')
export class ListInseminationsController implements ControllerCommand {
    constructor(private listInseminations: ListInseminations) {}

    @Get()
    @ApiOperation({ summary: "Listar inseminações" })
    @ApiResponse({ status: 200, description: "Inseminações retornada com sucesso!"})
    @ApiResponse({ status: 404, description: "Inseminações não encontradas!"})
    @ApiResponse({ status: 500, description: "Erro no servidor!"})
    handle(): Promise<Insemination[]> {
        return this.listInseminations.execute();
    }
}