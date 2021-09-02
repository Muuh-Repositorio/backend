import { EntityRepository, Repository } from "typeorm";
import { Childbirth } from "../entity/childbirth.entity";

@EntityRepository(Childbirth)
export class ChildbirthRepository extends Repository<Childbirth>{

}