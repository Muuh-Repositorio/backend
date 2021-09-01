import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { UserResponse } from "../interfaces/UserResponse";
import { UserIdValidation } from "../pipes";
import { GetUserById } from "../services"

@ApiTags('User')
@Controller('/api/user/id/:idt_user')
export class GetUserByIdController implements ControllerCommand {
    constructor(private getUserById: GetUserById) {}

    @Get()
    @ApiOperation({ summary: "Listar um usuário pelo ID" })
    @ApiResponse({ status: 200, description: "Usuário retornado com sucesso!"})
    @ApiResponse({ status: 404, description: "Usuário não encontrado!"})
    @ApiResponse({ status: 500, description: "Erro no servidor!"})
    handle(@Param('idt_user', UserIdValidation) idt_user: number): Promise<UserResponse> {
        return this.getUserById.execute(idt_user);
    }
}