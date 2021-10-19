import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { UserValidation } from "../dto/UserValidation";

@Injectable()
export class ValidateToken implements ServiceCommand {
    constructor(private jwtService: JwtService) {}

    async execute(user: UserValidation): Promise<Boolean> {
        try {
            if (user) {
                const token = this.jwtService.decode(user.access_token)
                if (new Date(token['exp'] * 1000) > new Date()) {
                    return true
                }
            }
        } catch (error) {}
        return false
    }
}