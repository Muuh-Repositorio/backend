import { Body, Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { Cow } from "../entity/Cow.entity";
import { GetCowsByFarm } from "../services/GetCowsByFarm.service";

@ApiTags('Cow')
@Controller('/api/cow/farm/:idt_farm/total')
export class GetCowsByFarmController implements ControllerCommand {
    constructor(private getCowsByFarm: GetCowsByFarm) {}

    @Get()
    @ApiOperation({ summary: "Listar vacas por fazenda" })
    async handle(@Param('idt_farm') idt_farm: number): Promise<Cow[]> {
        return this.getCowsByFarm.execute(idt_farm)
    }
}