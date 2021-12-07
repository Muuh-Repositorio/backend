import { Cow } from "src/cow/entity/Cow.entity";
import { Semen } from "src/semen/entity/Semen.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TypeCow extends BaseEntity{

    @PrimaryGeneratedColumn()
    idt_type: number

    @Column()
    type: string

    @Column()
    ideal_weight: number

    @Column()
    ideal_age: number

    @OneToMany(() => Cow, cow => cow.idt_type)
    cows: Cow[]

    @OneToMany(() => Semen, semen => semen.idt_type)
    semens: Semen[]
}