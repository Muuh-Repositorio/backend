import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { User } from "../entity/User.entity";
import { UserRepository } from "../repository/UserRepository";

@Injectable()
export class GetUserById implements ServiceCommand {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ) {}

    async execute(idt_user: number): Promise<User> {
        return await this.userRepository.findOne({ idt_user: idt_user })
    }
}