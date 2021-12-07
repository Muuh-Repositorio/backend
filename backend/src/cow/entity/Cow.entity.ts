import { Childbirth } from "src/childbirth/entity/Childbirth.entity";
import { CowSituations } from "src/cow_situations/CowSituations.entity";
import { Farm } from "src/farm/entity/Farm.entity";
import { Insemination } from "src/insemination/entity/Insemination.entity";
import { WeightHistory } from "src/weight_history/entity/WeightHistory.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cow extends BaseEntity {
    @PrimaryGeneratedColumn()
    idt_cow: number

    @Column({unique: true})
    code: string

    @Column()
    name: string

    @Column()
    weight: number

    @Column({ type: 'date'})
    birth_date: string

    @Column()
    gender: string

    @Column()
    @ManyToOne(() => CowSituations, cowSituation => cowSituation.cows)
    @JoinColumn({ name: 'idt_situation' })
    idt_situation: number

    @Column()
    @ManyToOne(() => Farm, farm => farm.cows)
    @JoinColumn({ name: 'idt_farm' })
    idt_farm: number

    @OneToMany(() => Childbirth, childbirth => childbirth.idt_cow)
    childbirths: Childbirth[]

    @OneToMany(() => Insemination, insemination => insemination.idt_cow)
    inseminations: Insemination[]
    
    @Column()
    @ManyToOne(() => CowSituations, cowSitutations => cowSitutations.cows)
    @JoinColumn({ name: "idt_type" })
    idt_type: number

    @OneToMany(() => WeightHistory, weightHistory => weightHistory.idt_cow)
    weights: WeightHistory[]
}