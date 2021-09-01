import { Users } from "src/auth/entity/User.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Farm extends BaseEntity {
    @PrimaryGeneratedColumn()
    idt_farm: number

    @Column({ unique: true })
    cnpj: string

    @Column()
    name: string

    @ManyToOne(() => Users, user => user.farms)
    @JoinColumn({ name: 'idt_user' })
    user: number
}