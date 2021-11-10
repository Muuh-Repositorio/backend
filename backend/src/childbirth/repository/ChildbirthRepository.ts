import { EntityRepository, Repository } from "typeorm";
import { Childbirth } from "../entity/Childbirth.entity";

@EntityRepository(Childbirth)
export class ChildbirthRepository extends Repository<Childbirth>{

}