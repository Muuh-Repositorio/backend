import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { UserResponse } from "../interfaces/UserResponse";
import { UserRepository } from "../repository";

@Injectable()
export class GetUserByCpf implements ServiceCommand{
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ){}

    async execute(userCpf: string): Promise<UserResponse>{
        const user = await this.userRepository.findOne({ cpf: userCpf })
 
        if (!user) {
            throw new NotFoundException('Usuário não encontrado!') 
        }

        return {
            idt_user: user.idt_user,
            name: user.name,
            email: user.email,
            phone: user.phone,
            cpf:user.cpf
        }
    }
}