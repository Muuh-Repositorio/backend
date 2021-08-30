import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { EntityRepository, Repository } from "typeorm";
import { AuthDto } from "../dto/AuthDto";
import { User } from "../entity/User.entity";

@EntityRepository(User)
export class SaveUserInDatabase extends Repository<User> implements ServiceCommand {

    async execute(authDto: AuthDto): Promise<User> {
        const { name, cpf, email, password } = authDto

        const user = this.create()

        user.name = name
        user.email = email
        user.cpf = cpf
        user.password = password

        try {
            await user.save()
            return user
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('Usuário já existe!')
            } else {
                throw new InternalServerErrorException('Erro no servidor!')
            }
        }
    }

}
