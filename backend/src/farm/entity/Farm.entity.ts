import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Farm extends BaseEntity {
    @PrimaryGeneratedColumn()
    idt_farm: number

    @Column({ unique: true })
    cnpj: string

    @Column()
    name: string

    // colocar relação com usuario
}