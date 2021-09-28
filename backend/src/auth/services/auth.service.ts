import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { GetUserByCpf } from "./GetUserByCpf.service";
import { compare } from 'bcrypt'
import { AuthDto } from "../dto/AuthCredentialsDto";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "../repository";

@Injectable()
export class AuthService{
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private getUserByCpf: GetUserByCpf,
        private jwtService: JwtService
    ){}

    async validateUser(userCpf: string, userPassword: string) {
        const user = await this.userRepository.findOne({ cpf: userCpf })

        if(user && user.cpf === userCpf && await compare(userPassword, user.password) ){
            const { idt_user, name, email, cpf } = user

            return { idt_user, name, email, cpf }
        }

        return null
    }

    async login(authDto: AuthDto){
        const payload = { cpf: authDto.cpf }
        const user = await this.getUserByCpf.execute(authDto.cpf)

        return {
            idt_user: user.idt_user,
            name: user.name,
            access_token: this.jwtService.sign(payload)
        }
    }

}