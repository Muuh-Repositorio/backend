import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { Farm } from "../entity/Farm.entity";
import { CnpjValidation } from "../pipes";
import { GetFarmByCnpj } from "../services";

@ApiTags('Farm')
@Controller('api/farm/cnpj/:cnpj')
export class GetFarmByCnpjController implements ControllerCommand {

    constructor(private getFarmByCnpj: GetFarmByCnpj) {}

    @Get()
    @ApiOperation({ summary: "Listar uma fazenda pelo CNPJ" })
    @ApiResponse({ status: 201, description: "Fazenda retornada com sucesso!"})
    @ApiResponse({ status: 500, description: "Erro com o servidor!"})
    handle(@Param('cnpj', CnpjValidation) cnpj: string): Promise<Farm> {
        return this.getFarmByCnpj.execute(cnpj);
    }
}