import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { GetUserById } from ".";
import { UserValidation } from "../dto/UserValidation";

@Injectable()
export class ValidateToken implements ServiceCommand {
    constructor(
        private jwtService: JwtService,
        private getUserById: GetUserById
    ) {}

    async execute(user: UserValidation): Promise<Boolean> {
        try {
            if (user) {
                const userExist = await this.getUserById.execute(user.idt_user)
                if (userExist) {
                    const token = this.jwtService.decode(user.access_token)
                    if (new Date(token['exp'] * 1000) > new Date()) {
                        return true
                    }
                }
            }
        } catch (error) {}
        return false
    }
}