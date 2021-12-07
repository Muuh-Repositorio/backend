import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { EntityRepository, Repository } from "typeorm";
import { ChildbirthDto } from "../dto/ChildbirthDto";
import { Childbirth } from "../entity/Childbirth.entity";

@EntityRepository(Childbirth)
export class SaveChildbirthInDatabase extends Repository<Childbirth> implements ServiceCommand{

    async execute(childbirthDto: ChildbirthDto): Promise<Childbirth>{
        const { idt_cow, childbirth_date, heifer_gender } = childbirthDto

        const childbirth = this.create()

        childbirth.idt_cow = idt_cow
        childbirth.heifer_gender = heifer_gender
        childbirth.childbirth_date = childbirth_date

        try {
            await childbirth.save()
            return childbirth
        } catch (error) {
            if(error.code === '23505'){
                throw new ConflictException('Parto já cadastrado!')
            }else{
                console.log(error)
                throw new InternalServerErrorException('Erro no servidor!')
            }
        }
    }
}