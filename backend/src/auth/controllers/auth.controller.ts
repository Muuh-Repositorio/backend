import { Controller, Post, UseGuards, Request } from "@nestjs/common";
import { LocalAuthGuard } from "../jwt/local-auth.guard";
import { AuthService } from "../services/auth.service";

@Controller('auth/login')
export class AuthController{

    constructor(
        private authService: AuthService
    ){}

    @UseGuards(LocalAuthGuard)
    @Post()
    async login(@Request() req: any){
        return this.authService.login(req.user)
    }
}