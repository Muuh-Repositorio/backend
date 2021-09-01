import { EntityRepository, Repository } from "typeorm";
import { Cows } from "../entity/Cow.entity";

@EntityRepository(Cows)
export class CowRepository extends Repository<Cows> {}