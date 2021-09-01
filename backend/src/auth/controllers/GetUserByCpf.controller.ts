import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { UserResponse } from "../interfaces/UserResponse";
import { GetUserByCpf } from "../services/GetUserByCpf.service";

@ApiTags('User')
@Controller('api/user/cpf/:cpf')
export class GetUserByCpfController implements ControllerCommand{
    constructor(
        private getUserByCpf: GetUserByCpf
    ){}

    @Get()
    @ApiOperation({ summary: "Listar um usuário pelo CPF" })
    @ApiResponse({ status: 200, description: "Usuário retornado com sucesso!"})
    @ApiResponse({ status: 404, description: "Usuário não encontrado!"})
    @ApiResponse({ status: 500, description: "Erro no servidor!"})
    handle(@Param('cpf') userCpf: string): Promise<UserResponse>{
        return this.getUserByCpf.execute(userCpf)
    }
}