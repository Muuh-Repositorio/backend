import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class CowSituations extends BaseEntity {
    @PrimaryColumn()
    idt_situation: number

    @Column()
    situation: string
}