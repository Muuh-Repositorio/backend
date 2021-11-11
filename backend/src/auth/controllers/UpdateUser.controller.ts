import { Body, Controller, Param, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { UpdateUserDto } from "../dto/UpdateUserDto";
import { UserResponse } from "../interfaces/UserResponse";
import { UpdateUser } from "../services/UpdateUser.service";

@ApiTags('User')
@Controller('/api/user/:idt_user')
export class UpdateUserController implements ControllerCommand {
    constructor(private updateUser: UpdateUser) {}

    @Put()
    @ApiOperation({ summary: "Atualizar as informações de um usuário" })
    @ApiResponse({ status: 201, description: "Usuário atualizado com sucesso!"})
    @ApiResponse({ status: 500, description: "Erro com o servidor!"})
    async handle(@Body() userDto: UpdateUserDto, @Param('idt_user') idt_user: number): Promise<UserResponse> {
        return this.updateUser.execute(userDto, idt_user)
    }
}