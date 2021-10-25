import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { Childbirth } from "../entity/childbirth.entity";
import { GetChildbirthByDate } from "../services/GetChildbirthByDate.service";

@ApiTags('Childbirth')
@Controller('api/childbirth/date/:date')
export class GetChildbirthByDateController implements ControllerCommand{
    constructor(
        private getChildbirthByDate: GetChildbirthByDate
    ){}

    @Get()
    @ApiOperation({ summary: "Listar vacas por datas" })
    @ApiResponse({ status: 200, description: "Vaca retornado com sucesso!"})
    @ApiResponse({ status: 404, description: "Vaca não encontrada!"})
    @ApiResponse({ status: 500, description: "Erro no servidor!"})
    async handle(@Param('date') date: string): Promise<Childbirth[]> {
        return await this.getChildbirthByDate.execute(date);
    }
}