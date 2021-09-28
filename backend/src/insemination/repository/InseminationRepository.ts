import { EntityRepository, Repository } from "typeorm";
import { Insemination } from "../entity/Insemination.entity";

@EntityRepository(Insemination)
export class InseminationRepository extends Repository<Insemination> {}