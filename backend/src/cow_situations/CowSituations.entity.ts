import { Cow } from "src/cow/entity/Cow.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class CowSituations extends BaseEntity {
    @PrimaryColumn()
    idt_situation: number

    @Column()
    situation: string

    @OneToMany(() => Cow, cow => cow.idt_situation)
    cows: Cow[]
}