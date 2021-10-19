import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { UserValidation } from "../dto/UserValidation";
import { ValidateToken } from "../services";

@ApiTags('User')
@Controller('api/auth/validateToken')
export class ValidateTokenController implements ControllerCommand {
    constructor(private validateToken: ValidateToken) {}

    @Post()
    @ApiOperation({ summary: "Validar token de acesso do Usuário" })
    async handle(@Body() user: UserValidation): Promise<Boolean> {
        return await this.validateToken.execute(user)
    }
}