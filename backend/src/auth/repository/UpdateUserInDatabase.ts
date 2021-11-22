import {InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { UpdateUserDto } from "../dto/UpdateUserDto";
import { Users } from "../entity/User.entity";

@EntityRepository(Users)
export class UpdateUserInDatabase extends Repository<Users> {
    async execute(userDto: UpdateUserDto, idt_user: number): Promise<Users> {
        const { email, phone } = userDto

        const user = this.create()

        if (email) user.email = email
        if (phone) user.phone = phone

        user.idt_user = idt_user

        try {
            await user.save()
            return user
        } catch (error) {
            throw new InternalServerErrorException('Erro no servidor!')
        }
    }

}