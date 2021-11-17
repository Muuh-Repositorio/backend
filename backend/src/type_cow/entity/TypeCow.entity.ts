import { Cow } from "src/cow/entity/Cow.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TypeCow extends BaseEntity{

    @PrimaryGeneratedColumn()
    idt_type: number

    @Column()
    type: string

    @Column()
    min_ideal_weight: number

    @Column()
    max_ideal_weight: number

    @Column()
    min_ideal_age: number

    @Column()
    max_ideal_age: number

    @OneToMany(() => Cow, cow => cow.idt_type)
    cows: Cow[]
}