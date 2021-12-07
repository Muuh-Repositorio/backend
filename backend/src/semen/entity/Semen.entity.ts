import { Farm } from "src/farm/entity/Farm.entity";
import { Insemination } from "src/insemination/entity/Insemination.entity";
import { TypeCow } from "src/type_cow/entity/TypeCow.entity";
import { BaseEntity, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Semen extends BaseEntity {
    @PrimaryGeneratedColumn()
    idt_semen: number

    @ManyToOne(() => TypeCow, typeCow => typeCow.semens)
    @JoinColumn({ name: 'idt_type' })
    idt_type: number

    @OneToOne(() => Insemination, insemination => insemination.idt_semen)
    insemination: Insemination

    @ManyToOne(() => Farm, farm => farm.semens)
    @JoinColumn({ name: 'idt_farm' })
    idt_farm: number
}