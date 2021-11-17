import { Injectable } from "@nestjs/common";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { GetCowTypes } from "src/type_cow/services/GetCowTypes.service";
import { CowParamsDto } from "../dto/CowParamsDto";
import * as moment from 'moment';


@Injectable()
export class ValidateCow implements ServiceCommand {
    constructor(private getCowTypes: GetCowTypes) {}

    async execute(cowParams: CowParamsDto): Promise<boolean> {
        const { weight, idt_type, birth_date } = cowParams

        let type = (await this.getCowTypes.execute())
        type = type.filter(type => { return type.idt_type === idt_type})

        const now = moment()
        const birth_date_ = moment(birth_date, "DD-MM-YYYY")
        const ageInMonths = Math.floor(moment.duration(now.diff(birth_date_)).asMonths())

        const ageIsValid = ageInMonths >= type[0].ideal_age
        const weightIsValid = weight >= type[0].ideal_weight

        if (ageIsValid && weightIsValid) {
            return true
        }
        return false
    }
}