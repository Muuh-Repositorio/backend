import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { ForgotPassword } from "../services";

@ApiTags('User')
@Controller('/api/forgotPassword')
export class ForgotPasswordController implements ControllerCommand {
    constructor(private forgotPassowrd: ForgotPassword) {}

    @Post()
    @ApiOperation({ summary: "Senha Esquecida" })
    @ApiResponse({ status: 201, description: "Reset de senha solicitado com sucesso!"})
    @ApiResponse({ status: 404, description: "Usuário não encontrado!"})
    @ApiResponse({ status: 500, description: "Erro com o servidor!"})
    async handle(@Body() body: string): Promise<any> {
        await this.forgotPassowrd.execute(body['email'])
    }
}