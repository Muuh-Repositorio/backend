import { Cow } from "src/cow/entity/Cow.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Childbirth extends BaseEntity{

    @PrimaryGeneratedColumn()
    idt_childbirth: number

    @Column()
    idt_cow: number

    @Column({ type: 'date'})
    childbirth_date: string

    @Column()
    heifer_gender: string

    @ManyToOne(() => Cow, cow => cow.childbirths)
    @JoinColumn({ name: 'idt_cow' })
    cows: number
}