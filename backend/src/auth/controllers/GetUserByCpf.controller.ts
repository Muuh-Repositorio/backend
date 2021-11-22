import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { UserResponse } from "../interfaces/UserResponse";
import { JwtAuthGuard } from "../jwt/jwt-auth.guard";
import { UserCpfValidation } from "../pipes/UserCpfValidation.pipe";
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
    handle(@Param('cpf', UserCpfValidation) userCpf: string): Promise<UserResponse>{
        return this.getUserByCpf.execute(userCpf)
    }
}