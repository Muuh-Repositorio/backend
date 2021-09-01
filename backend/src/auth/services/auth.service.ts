import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { GetUserByCpf } from "./GetUserByCpf.service";
import { compare } from 'bcrypt'

@Injectable()
export class AuthService{
    constructor(
        private getUserByCpf: GetUserByCpf,
        private jwtService: JwtService
    ){}

    async validateUser(userCpf: string, userPassword: string){
        const user = await this.getUserByCpf.execute(userCpf)

        if(user && user.cpf === userCpf && compare(userPassword, user.password) ){
            const { idt_user, name, email, cpf } = user

            return { idt_user, name, email, cpf }
        }

        return null
    }

    async login(user: any){
        const payload = { id: user.idt_user, cpf: user.cpf }

        return {
            access_token: this.jwtService.sign(payload)
        }
    }

}