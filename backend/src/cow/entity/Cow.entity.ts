import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cow extends BaseEntity {
    @PrimaryGeneratedColumn()
    idt_cow: number

    @Column()
    idt_situation: number // Adicionar Relacionamento

    @Column()
    idt_farm: number // Adicionar Relacionamento

    @Column()
    idt_type: number // Adicionar Relacionamento

    @Column({unique: true})
    code: string

    @Column()
    name: string

    @Column()
    weight: number

    @Column()
    birth_date: Date
}