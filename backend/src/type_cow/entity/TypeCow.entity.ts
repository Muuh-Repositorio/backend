import { Cow } from "src/cow/entity/Cow.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TypeCow extends BaseEntity{

    @PrimaryGeneratedColumn()
    idt_type: number

    @Column()
    type: string

    @OneToMany(() => Cow, cow => cow.idt_type)
    cows: Cow[]
}