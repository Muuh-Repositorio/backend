import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { HashPassword } from ".";
import { ResetPasswordDto } from "../dto/ResetPasswordDto";
import { UserRepository } from "../repository";

@Injectable()
export class ResetPassword implements ServiceCommand {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private hashPassword: HashPassword
    ) {}

    async execute(data: ResetPasswordDto): Promise<any> {
        const user = await this.userRepository.findOne({ email: data.email })

        if (!user) throw new NotFoundException('Usuário não encontrado!')

        if (data.token !== user.passwordResetToken) {
            throw new BadRequestException('Token inválido!')
        }

        const now = new Date()

        if (now > user.passwordResetExpires) {
            throw new BadRequestException('Token expirado!')
        }

        if (data.newPassword !== data.confirmNewPassword) {
            throw new BadRequestException('Senhas não conferem!')
        }

        const hashedPassword = await this.hashPassword.execute(data.newPassword)
        data.newPassword = hashedPassword
        
        await this.userRepository.update(
            { idt_user: user.idt_user},
            {
                passwordResetExpires: null,
                passwordResetToken: null,
                password: data.newPassword
            }
        )
    }
}