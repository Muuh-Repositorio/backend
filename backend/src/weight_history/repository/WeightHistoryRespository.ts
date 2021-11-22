import { EntityRepository, Repository } from "typeorm";
import { WeightHistory } from "../entity/WeightHistory.entity";

@EntityRepository(WeightHistory)
export class WeightHistoryRepository extends Repository<WeightHistory> {}