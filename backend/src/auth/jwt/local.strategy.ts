import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UserResponse } from "../interfaces/UserResponse";
import { AuthService } from "../services/auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService: AuthService){
        super({
            usernameField: 'cpf',
            passwordField: 'password'
        })
    }

    async validate(cpf: string, password: string): Promise<any>{
        const user = await this.authService.validateUser(cpf, password)

        if(!user){
            throw new UnauthorizedException()
        }

        return user
    }

}