import { Cow } from "src/cow/entity/Cow.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class WeightHistory extends BaseEntity {
    @PrimaryGeneratedColumn()
    idt_history: number

    @Column()
    weight: number

    @Column({ type: 'date' })
    update_date: string

    @ManyToOne(() => Cow, cow => cow.weights)
    @JoinColumn({ name: 'idt_cow' })
    idt_cow: number
}