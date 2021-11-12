import { InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { WeightHistoryDto } from "../dto/WeightHistoryDto";
import { WeightHistory } from "../entity/WeightHistory.entity";

@EntityRepository(WeightHistory)
export class SaveWeightInDatabase extends Repository<WeightHistory> {
    async execute(weightHistoryDto: WeightHistoryDto): Promise<WeightHistory> {
        const { idt_cow, weight } = weightHistoryDto

        const history = this.create()

        history.idt_cow = idt_cow
        history.update_date = new Date().toLocaleDateString('pt-BR')
        history.weight = weight

        try {
            await history.save()
            return history
        } catch (error) {
            throw new InternalServerErrorException('Erro no servidor!')
        }
    }
}