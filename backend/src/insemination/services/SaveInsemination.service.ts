import { BadRequestException, forwardRef, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GetCowById } from "src/cow/services";
import { UpdateCow } from "src/cow/services/UpdateCow.service";
import { Situations } from "src/cow_situations/Situations.enum";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { DeleteSemen } from "src/semen/services/DeleteSemen.service";
import { GetSemenById } from "src/semen/services/GetSemenById.service";
import { InseminationDto } from "../dto/InseminationDto";
import { InseminationResponse } from "../interfaces/InseminationResponse";
import { InseminationRepository } from "../repository";
import { SaveInseminationInDatabase } from "../repository/SaveInseminationInDatabase";

@Injectable()
export class SaveInsemination implements ServiceCommand {

    constructor(
        @InjectRepository(SaveInseminationInDatabase)
        private saveInseminationInDatabase: SaveInseminationInDatabase,
        private updateCow: UpdateCow,
        private getCowById: GetCowById,
        private getSemenById: GetSemenById,
        private deleteSemen: DeleteSemen
    ) {}

    async execute(inseminationDto: InseminationDto): Promise<InseminationResponse> {
        const { idt_bull, idt_semen } = inseminationDto

        if(idt_bull) {
            const bull = await this.getCowById.execute(idt_bull)
            const bullExist = bull.gender === 'M' ? true : false
            if (!bullExist) throw new BadRequestException('Touro não encontrado!')
        }

        if(idt_semen) {
            const semenExist = await this.getSemenById.execute(idt_semen)
            if (!semenExist) throw new BadRequestException('Semen não encontrado!')
            await this.deleteSemen.execute(idt_semen)
        }

        const insemination = await this.saveInseminationInDatabase.execute(inseminationDto);
        this.updateCow.execute({ situation: Situations.getID(Situations.INSEMINATED) }, inseminationDto.idt_cow)
        
        return {
            idt_insemination: insemination.idt_insemination,
            idt_cow: insemination.idt_cow,
            insemination_date: insemination.insemination_date
        }
    }
}