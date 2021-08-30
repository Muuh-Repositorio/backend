import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import console from "console";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { EntityRepository, Repository } from "typeorm";
import { AuthDto } from "../dto/AuthDto";
import { Users } from "../entity/User.entity";

@EntityRepository(Users)
export class SaveUserInDatabase extends Repository<Users> implements ServiceCommand {

    async execute(authDto: AuthDto): Promise<Users> {
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
                console.log(error)
                throw new InternalServerErrorException('Erro no servidor!')
            }
        }
    }

}
