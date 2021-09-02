import { Cow } from "src/cow/entity/Cow.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Childbirth extends BaseEntity{

    @PrimaryGeneratedColumn()
    idt_childbirth: number

    @Column()
    idt_cow: number

    @Column()
    childbirth_date: Date

    @ManyToOne(() => Cow, cow => cow.childbirts)
    @JoinColumn({ name: 'idt_cow' })
    cows: number
}