import { Farm } from "src/farm/entity/Farm.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    idt_user: number

    @Column()
    name: string

    @Column({ unique: true })
    email: string

    @Column({ unique: true })
    cpf: string

    @Column()
    password: string

    @Column({ default: false })
    verifed_email: boolean

    @OneToMany(() => Farm, farm => farm.user)
    farms: Farm[]
}