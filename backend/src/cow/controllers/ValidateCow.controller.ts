import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { CowParamsDto } from "../dto/CowParamsDto";
import { ValidateCow } from "../services/ValidateCow.service";

@ApiTags('Cow')
@Controller('/api/cow/validate')
export class ValidateCowController implements ControllerCommand {

    constructor(private validateCow: ValidateCow) {}

    @Post()
    async handle(@Body() cowParams: CowParamsDto): Promise<any> {
        return this.validateCow.execute(cowParams)
    }
}