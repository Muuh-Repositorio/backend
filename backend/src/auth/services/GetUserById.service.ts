import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { UserResponse } from "../interfaces/UserResponse";
import { UserRepository } from "../repository/UserRepository";

@Injectable()
export class GetUserById implements ServiceCommand {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ) {}

    async execute(idt_user: number): Promise<UserResponse> {
        const user = await this.userRepository.findOne({ idt_user: idt_user })

        if(user) {
            return {
                idt_user: user.idt_user,
                cpf: user.cpf,
                name: user.name,
                email: user.email,
                phone: user.phone
            }
        }
    }
}