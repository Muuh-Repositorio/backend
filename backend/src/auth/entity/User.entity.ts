import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(["cpf", "email"])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    idt_user: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    cpf: string

    @Column()
    password: string

    @Column({ default: false })
    verifed_email: boolean
}