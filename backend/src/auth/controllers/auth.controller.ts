import { Controller, Post, UseGuards, Body } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthDto } from "../dto/AuthCredentialsDto";
import { LocalAuthGuard } from "../jwt/local-auth.guard";
import { AuthService } from "../services/Auth.service";

@ApiTags('User')
@Controller('api/auth/login')
export class AuthController{

    constructor(
        private authService: AuthService
    ){}

    @UseGuards(LocalAuthGuard)
    @Post()
    @ApiOperation({ summary: "Login do Usuário" })
    @ApiResponse({ status: 201, description: "Usuário logado com sucesso!"})
    @ApiResponse({ status: 401, description: "Ação não autorizada!"})
    async login(@Body() authDto: AuthDto){
        return this.authService.login(authDto)
    }
}