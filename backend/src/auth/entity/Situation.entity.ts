import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Situations extends BaseEntity {
    @PrimaryGeneratedColumn()
    idt_situation: number

    @Column()
    situation: string
}