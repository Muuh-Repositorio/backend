import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { Childbirth } from "../entity/Childbirth.entity";
import { ChildbirthRepository } from "../repository/ChildbirthRepository";

@Injectable()
export class GetBirthsByFarm implements ServiceCommand {
    constructor(
        @InjectRepository(ChildbirthRepository)
        private childBirthRepository: ChildbirthRepository
    ) {}

    async execute(idt_farm: number): Promise<Childbirth[]> {
        return await this.childBirthRepository.query(`
            select
                c.idt_cow,
                c.idt_farm
            from cow c
                join childbirth cb
                    on c.idt_cow = cb.idt_cow
            where c.idt_farm = ${idt_farm}
            group by c.idt_cow;
        `)
    }
}