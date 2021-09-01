import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserIdValidation } from "src/auth/pipes";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { Farm } from "../entity/Farm.entity";
import { GetAllFarmsByUser } from "../services";

@ApiTags('Farm')
@Controller('api/farm/user/:idt_user')
export class GetAllFarmsByUserController implements ControllerCommand {
    constructor(private getAllFarmsByUser: GetAllFarmsByUser) {}

    @Get()
    @ApiOperation({ summary: "Listar todas as fazendas de um usuário" })
    @ApiResponse({ status: 201, description: "Fazendas retornadas com sucesso!"})
    @ApiResponse({ status: 500, description: "Erro com o servidor!"})
    handle(@Param('idt_user', UserIdValidation) idt_user: number): Promise<Farm[]> {
        return this.getAllFarmsByUser.execute(idt_user)
    }
}