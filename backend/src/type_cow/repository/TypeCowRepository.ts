import { EntityRepository, Repository } from "typeorm";
import { TypeCow } from "../entity/TypeCow.entity";

@EntityRepository(TypeCow)
export class TypeCowRepository extends Repository<TypeCow>{
    
}