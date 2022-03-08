import { Cow } from "src/cow/entity/Cow.entity" ;
import { Semen } from "src/semen/entity/Semen.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Insemination extends BaseEntity {
    @PrimaryGeneratedColumn()
    idt_insemination: number

    @ManyToOne(() => Cow, cow => cow.inseminations)
    @JoinColumn({ name: 'idt_cow' })
    idt_cow: number

    @Column({ default: null })
    @ManyToOne(() => Cow, cow => cow.inseminations)
    @JoinColumn({ name: 'idt_bull' })
    idt_bull: number
    
    @Column({ default: null })
    @OneToOne(() => Semen, semen => semen.insemination)
    @JoinColumn({ name: 'idt_semen' })
    idt_semen: number

    @Column({ type: 'date' })
    insemination_date: string

    @Column({ default: null })
    diagnosis: boolean

}