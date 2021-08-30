import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { User } from "../entity/User.entity";
import { GetUserById } from "../services"

@ApiTags('User')
@Controller('/api/user/:idt_user')
export class GetUserByIdController implements ControllerCommand {
    constructor(private getUserById: GetUserById) {}

    @Get()
    @ApiOperation({ summary: "Listar um usuário pelo ID" })
    @ApiResponse({ status: 200, description: "Usuário retornado com sucesso!"})
    handle(@Param('idt_user') idt_user: number): Promise<User> {
        return this.getUserById.execute(idt_user);
    }
}