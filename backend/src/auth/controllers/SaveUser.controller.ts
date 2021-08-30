import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { AuthDto } from "../dto/AuthDto";
import { User } from "../entity/User.entity";
import { SaveUser } from "../services/SaveUser.service";

@ApiTags('User')
@Controller('/api/user')
export class SaveUserController implements ControllerCommand {

    constructor(private saveUser: SaveUser) {}

    @Post()
    @ApiOperation({ summary: "Cadastrar um usuário" })
    @ApiResponse({ status: 201, description: "Usuário cadastrado com sucesso!"})
    handle(@Body() authDto: AuthDto): Promise<User> {
        return this.saveUser.execute(authDto)
    }
}