import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

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
}