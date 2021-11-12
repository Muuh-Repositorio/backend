import { Controller, Get, Injectable, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { InjectRepository } from "@nestjs/typeorm";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { WeightHistory } from "../entity/WeightHistory.entity";
import { WeightHistoryRepository } from "../repository/WeightHistoryRespository";

@Injectable()
@ApiTags('Weight History')
@Controller('/api/weightHistory/cow/:idt_cow')
export class GetWeightHistoryByCowController implements ControllerCommand {
    constructor(
        @InjectRepository(WeightHistoryRepository)
        private weightHistoryRepository: WeightHistoryRepository
    ) {}

    @Get()
    @ApiOperation({ summary: "Listar histórico de pesos de uma vaca pelo ID" })
    @ApiResponse({ status: 200, description: "Histórico retornado com sucesso!"})
    @ApiResponse({ status: 404, description: "Vaca não encontrada!"})
    @ApiResponse({ status: 500, description: "Erro no servidor!"})
    async handle(@Param('idt_cow') idt_cow: number): Promise<WeightHistory[]> {
        return await this.weightHistoryRepository.find({ idt_cow: idt_cow })
    }
}