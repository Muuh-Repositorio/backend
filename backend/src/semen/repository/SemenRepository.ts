import { EntityRepository, Repository } from "typeorm";
import { Semen } from "../entity/Semen.entity";

@EntityRepository(Semen)
export class SemenRepository extends Repository<Semen> {}