import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { ChildbirthDto } from "../dto/ChildbirthDto";
import { Childbirth } from "../entity/childbirth.entity";
import { SaveChildbirth } from "../services/SaveChildbirth.service";

@ApiTags('Childbirth')
@Controller('api/childbirth')
export class SaveChildbirthController implements ControllerCommand{
    constructor(
        private saveChildbirth: SaveChildbirth
    ){}
    
    @Post()
    @ApiOperation({ summary: "Cadastrar um parto" })
    @ApiResponse({ status: 201, description: "Parto cadastrado com sucesso!" })
    @ApiResponse({ status: 409, description: "Alguma informação passada já existe!" })
    @ApiResponse({ status: 500, description: "Erro com o servidor!" })
    handle(@Body() childbirthDto: ChildbirthDto): Promise<Childbirth>{
        return this.saveChildbirth.execute(childbirthDto) 
    }
}