import { Controller, Get, Param, Query } from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Situations } from "src/cow_situations/Situations.enum";
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
    @ApiQuery({ name: 'situation', enum: Situations})
    async handle(@Param('idt_farm') idt_farm: number, @Query() query: Situations): Promise<Cow[]> {
        const idt_situation: number = Situations.getID(query['situation'])
        return await this.getCowsBySituations.execute(idt_farm, idt_situation)
    }
}