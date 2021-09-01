import { EntityRepository, Repository } from "typeorm";
import { Farm } from "../entity/Farm.entity";

@EntityRepository(Farm)
export class FarmRepository extends Repository<Farm> {}