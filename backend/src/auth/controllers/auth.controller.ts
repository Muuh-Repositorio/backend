import { Controller, Post, UseGuards, Body } from "@nestjs/common";
import { AuthDto } from "../dto/AuthCredentialsDto";
import { LocalAuthGuard } from "../jwt/local-auth.guard";
import { AuthService } from "../services/auth.service";

@Controller('api/auth/login')
export class AuthController{

    constructor(
        private authService: AuthService
    ){}

    @UseGuards(LocalAuthGuard)
    @Post()
    async login(@Body() authDto: AuthDto){
        return this.authService.login(authDto)
    }
}