import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { Cow } from "../entity/Cow.entity";
import { CowRepository } from "../repository";

@Injectable()
export class GetCowsByFarm implements ServiceCommand {
    constructor(
        @InjectRepository(CowRepository)
        private cowRepository: CowRepository,
    ) {}

    async execute(idt_farm: number): Promise<Cow[]> {
        return this.cowRepository.query(`
            select
                c.idt_cow,
                c.name,
                c.code,
                c.weight,
                c.birth_date,
                c.idt_type,
                max(cb.childbirth_date) lastBirth,
                max(i.insemination_date) lastInsemination
            from cow c
                full join childbirth cb
                    on c.idt_cow = cb.idt_cow
                full join insemination i
                    on c.idt_cow = i.idt_cow
            where c.idt_farm = ${idt_farm}
            group by c.idt_cow;
        `)
    }
}