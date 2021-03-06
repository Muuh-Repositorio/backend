import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { UserDto } from "../dto/UserDto";
import { UserResponse } from "../interfaces/UserResponse";
import { SaveUser } from "../services/SaveUser.service";

@ApiTags('User')
@Controller('/api/user')
export class SaveUserController implements ControllerCommand {

    constructor(private saveUser: SaveUser) {}

    @Post()
    @ApiOperation({ summary: "Cadastrar um usuário" })
    @ApiResponse({ status: 201, description: "Usuário cadastrado com sucesso!"})
    @ApiResponse({ status: 409, description: "Alguma informação passada já existe!"})
    @ApiResponse({ status: 500, description: "Erro com o servidor!"})
    handle(@Body() userDto: UserDto): Promise<UserResponse> {
        return this.saveUser.execute(userDto)
    }
}