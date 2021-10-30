import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { TypeCow } from "../entity/TypeCow.entity";
import { GetCowTypes } from "../services/GetCowTypes.service";

@ApiTags('Cow')
@Controller("/api/cowTypes")
export class GetCowTypesController implements ControllerCommand {
    constructor(private getCowTypes: GetCowTypes) {}

    @Get()
    @ApiOperation({ summary: "Listar tipos de gado" })
    @ApiResponse({ status: 201, description: "Tipo de gado cadastrado com sucesso!" })
    @ApiResponse({ status: 409, description: "Alguma informação passada já existe!" })
    @ApiResponse({ status: 500, description: "Erro com o servidor!" })
    async handle(): Promise<TypeCow[]> {
        return await this.getCowTypes.execute()
    }
}