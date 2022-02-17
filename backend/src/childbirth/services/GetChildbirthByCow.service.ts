import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { Childbirth } from "../entity/Childbirth.entity";
import { ChildbirthResponse } from "../interfaces/ChildbirthResponse";
import { ChildbirthRepository } from "../repository/ChildbirthRepository";

@Injectable()
export class GetChildbirthByCow implements ServiceCommand{
    constructor(
        @InjectRepository(ChildbirthRepository)
        private childbirthRepository: ChildbirthRepository
    ){}

    async execute(idt_cow: number): Promise<Childbirth[]>{
        const childbirth = await this.childbirthRepository.find({ idt_cow: idt_cow })

        if(!childbirth){
            throw new NotFoundException('Parto não encontrado!')
        }

        return childbirth
    }
}