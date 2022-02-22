import { Controller, Delete, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/Interfaces/ControllerCommand";
import { DeleteSemen } from "../services/DeleteSemen.service";

@ApiTags('Semen')
@Controller('/api/semen/:idt_semen')
export class DeleteSemenController implements ControllerCommand {
    constructor(private deleteSemen: DeleteSemen) {}

    @Delete()
    async handle(@Param('idt_semen') idt_semen: number): Promise<void> {
        await this.deleteSemen.execute(idt_semen)
    }
}