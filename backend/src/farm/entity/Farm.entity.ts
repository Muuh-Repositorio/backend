import { Users } from "src/auth/entity/User.entity";
import { Cow } from "src/cow/entity/Cow.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Farm extends BaseEntity {
    @PrimaryGeneratedColumn()
    idt_farm: number

    @Column({ unique: true })
    sei: string

    @Column()
    name: string

    @Column({ default: 3 })
    notifications_days: number

    @ManyToOne(() => Users, user => user.farms)
    @JoinColumn({ name: 'idt_user' })
    user: number

    @OneToMany(() => Cow, cow => cow.idt_farm)
    cows: Cow[]
}