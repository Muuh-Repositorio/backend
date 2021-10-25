// import { Controller } from "@nestjs/common";
// import { ApiOperation, ApiTags } from "@nestjs/swagger";
// import { ControllerCommand } from "src/Interfaces/ControllerCommand";

// @ApiTags('Mimosa')
// @Controller('/mimosa')
// export class ChatbotController implements ControllerCommand{
//     constructor(){}

//     @ApiOperation({ summary: "Ativar mimosa" })
//     // @ApiResponse({ status: 200, description: "Vaca retornado com sucesso!"})
//     // @ApiResponse({ status: 404, description: "Vaca não encontrada!"})
//     // @ApiResponse({ status: 500, description: "Erro no servidor!"})
//     handle(@Param('idt_cow') idt_cow: number): Promise<ChildbirthResponse> {
//         return this.getChildbirthByCow.execute(idt_cow);
//     }
// }