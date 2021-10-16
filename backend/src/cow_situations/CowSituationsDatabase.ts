import { EntityRepository, Repository } from "typeorm";
import { CowSituations } from "./CowSituations.entity";

@EntityRepository(CowSituations)
export class CowSituationsDatabase extends Repository<CowSituations> {}