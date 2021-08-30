import { EntityRepository, Repository } from "typeorm";
import { Users } from "../entity/User.entity";

@EntityRepository(Users)
export class UserRepository extends Repository<Users> {}