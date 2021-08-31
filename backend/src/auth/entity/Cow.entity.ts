import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class Cows extends BaseEntity {
    @PrimaryGeneratedColumn()
    idt_cow: number

    @Column()
    idt_situation: number

    @Column()
    idt_user: number

    @Column()
    idt_type: number

    @Column({ unique: true })
    code: string

    @Column()
    name: string

    @Column()
    weight: number

    @Column()
    birth_date: Date
}