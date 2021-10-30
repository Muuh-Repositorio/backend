import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { TypeCow } from "../entity/TypeCow.entity";
import { TypeCowRepository } from "../repository/TypeCowRepository";

@Injectable()
export class GetCowTypes implements ServiceCommand {
    constructor(
        @InjectRepository(TypeCowRepository)
        private cowTypeRepository: TypeCowRepository
    ) {}

    async execute(): Promise<TypeCow[]> {
        return await this.cowTypeRepository.find()
    }
}