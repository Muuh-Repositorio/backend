import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { EntityRepository, Repository } from "typeorm";
import { TypeCowDto } from "../dto/TypeCowDto";
import { TypeCow } from "../entity/TypeCow.entity";

@EntityRepository(TypeCow)
export class SaveTypeCowInDatabase extends Repository<TypeCow> implements ServiceCommand{

    async execute(typecowDto: TypeCowDto): Promise<TypeCow>{
        const { type } = typecowDto


        const typeCow = this.create()

        typeCow.type = type

        try {
            await typeCow.save()
            return typeCow
        } catch (error) {
            if(error.code === '23505'){
                throw new ConflictException('Tipo já cadastrado!')
            }else{
                throw new InternalServerErrorException('Erro no servidor')
            }
        }
    }
}