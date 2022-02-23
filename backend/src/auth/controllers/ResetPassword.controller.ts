import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { ResetPasswordDto } from "../dto/ResetPasswordDto";
import { ResetPassword } from "../services/ResetPassword.service";

@ApiTags('User')
@Controller('/api/resetPassword')
export class ResetPasswordController implements ControllerCommand {
    constructor(private resetPassword: ResetPassword) {}

    @Post()
    @ApiOperation({ summary: "Criar nova senha" })
    @ApiResponse({ status: 201, description: "Senha alterada com sucesso!"})
    @ApiResponse({ status: 500, description: "Erro com o servidor!"})
    async handle(@Body() data: ResetPasswordDto): Promise<any> {
        await this.resetPassword.execute(data)
    }
}