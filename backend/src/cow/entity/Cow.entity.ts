import { Childbirth } from "src/childbirth/entity/childbirth.entity";
import { Farm } from "src/farm/entity/Farm.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cow extends BaseEntity {
    @PrimaryGeneratedColumn()
    idt_cow: number

    @Column()
    idt_situation: number // Adicionar Relacionamento

    @Column()
    idt_type: number // Adicionar Relacionamento

    @Column({unique: true})
    code: string

    @Column()
    name: string

    @Column()
    weight: number

    @Column()
    birth_date: Date

    @ManyToOne(() => Farm, farm => farm.cows)
    @JoinColumn({ name: 'idt_farm' })
    idt_farm: number

    @OneToMany(() => Childbirth, childbirth => childbirth.idt_cow)
    childbirts: Childbirth[]
}