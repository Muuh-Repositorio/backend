import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { ChildbirthResponse } from "../interfaces/ChildbirthResponse";
import { ChildbirthRepository } from "../repository/ChildbirthRepository";

@Injectable()
export class GetChildbirthByCow implements ServiceCommand{
    constructor(
        @InjectRepository(ChildbirthRepository)
        private childbirthRepository: ChildbirthRepository
    ){}

    async execute(idt_cow: number): Promise<ChildbirthResponse>{
        const childbirth = await this.childbirthRepository.findOne({ idt_cow: idt_cow })

        if(!childbirth){
            throw new NotFoundException('Parto não encontrado!')
        }

        return {
            idt_childbirth: childbirth.idt_childbirth,
            idt_cow: childbirth.idt_cow,
            childbirth_date: childbirth.childbirth_date,
            cows: childbirth.cows
        }
    }
}