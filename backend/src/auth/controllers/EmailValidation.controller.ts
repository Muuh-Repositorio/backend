import { Controller, Param, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { EmailValidation } from "../services";

@ApiTags('User')
@Controller('/api/user/:idt_user/email_validation')
// @UseGuards(AuthGuard('jwt'))
// @ApiBearerAuth()
export class EmailValidationController implements ControllerCommand {
    
    constructor(private emailValidation: EmailValidation) {}
    
    @Post()
    @ApiOperation({ summary: "Verificar email do usuário" })
    @ApiResponse({ status: 201, description: "Email verificado com sucesso!"})
    @ApiResponse({ status: 400, description: "Email já verificado!"})
    async handle(@Param('idt_user') idt_user: number): Promise<void> {
        return this.emailValidation.execute(idt_user)
    }
}