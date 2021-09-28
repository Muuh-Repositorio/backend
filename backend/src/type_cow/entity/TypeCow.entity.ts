import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TypeCow extends BaseEntity{

    @PrimaryGeneratedColumn()
    idt_type: number

    @Column()
    type: string

}