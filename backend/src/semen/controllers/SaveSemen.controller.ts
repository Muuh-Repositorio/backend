import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { SemenDto } from "../dto/SemenDto";
import { Semen } from "../entity/Semen.entity";
import { SaveSemen } from "../services/SaveSemen.service";

@ApiTags('Semen')
@Controller('/api/semen')
export class SaveSemenController implements ControllerCommand {
    constructor(private saveSemen: SaveSemen) {}

    @Post()
    @ApiOperation({ summary: "Cadastrar um semên" })
    @ApiResponse({ status: 201, description: "Sêmen cadastrado com sucesso!"})
    @ApiResponse({ status: 500, description: "Erro com o servidor!"})
    async handle(@Body() semenDto: SemenDto): Promise<Semen> {
        return this.saveSemen.execute(semenDto)
    }
}