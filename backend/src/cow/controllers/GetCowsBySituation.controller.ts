import { Controller, Get, Param, Query } from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { Cow } from "../entity/Cow.entity";
import { GetCowsBySituation } from "../services";

@ApiTags('Cow')
@Controller('/api/cow/farm/:idt_farm')
export class GetCowsBySituationController implements ControllerCommand {
    constructor(private getCowsBySituations: GetCowsBySituation) {}

    @Get()
    @ApiOperation({ summary: "Listar vacas pela situação" })
    @ApiResponse({ status: 200, description: "Vacas retornadas com sucesso!"})
    // @ApiQuery({ name: 'situation', enum: Situations})
    async handle(@Param('idt_farm') idt_farm: number, @Query() query: Situations): Promise<Cow[]> {
        const situation: number = Number(Situations[query['situation']])
        return await this.getCowsBySituations.execute(idt_farm, situation)
    }
}