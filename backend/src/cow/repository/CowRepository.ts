import { EntityRepository, Repository } from "typeorm";
import { Cow } from "../entity/Cow.entity";

@EntityRepository(Cow)
export class CowRepository extends Repository<Cow> {}