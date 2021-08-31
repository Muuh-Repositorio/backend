import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Inseminations extends BaseEntity {
    @PrimaryGeneratedColumn()
    idt_insemination: number

    @Column()
    idt_cow: number

    @Column()
    insemination_date: Date
}