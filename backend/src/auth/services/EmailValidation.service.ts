import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { UserRepository } from "../repository";

@Injectable()
export class EmailValidation implements ServiceCommand {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ) {}

    async execute(idt_user: number): Promise<void> {
        const user = await this.userRepository.findOne({ idt_user: idt_user })
        
        if (user.verifed_email === true) {
            throw new BadRequestException('Email já verificado!')
        }

        await this.userRepository.update(idt_user, { verifed_email: true })
    }

}