import { Childbirth } from "src/childbirth/entity/childbirth.entity";
import { Cow } from "src/cow/entity/Cow.entity" ;
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Insemination extends BaseEntity {
    @PrimaryGeneratedColumn()
    idt_insemination: number

    @ManyToOne(() => Cow, cow => cow.inseminations)
    @JoinColumn({ name: 'idt_cow' })
    idt_cow: number

    @Column({ type: 'date' })
    insemination_date: string

    @Column({ default: null })
    diagnosis: boolean
}