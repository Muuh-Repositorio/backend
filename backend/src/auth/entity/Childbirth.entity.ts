import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Childbirths extends BaseEntity {
    @PrimaryGeneratedColumn()
    idt_childbirth: number

    @Column()
    idt_cow: number

    @Column()
    childbirth_date: Date
}