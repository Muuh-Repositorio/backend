import { Injectable, NotFoundException, PipeTransform } from "@nestjs/common";
import { GetUserById } from "../services";

@Injectable()
export class UserIdValidation implements PipeTransform {
    constructor(private getUserById: GetUserById) {}

    async transform(value: any): Promise<any> {
        const idt_exist = await this.getUserById.execute(value.idt_user || value)

        if (!idt_exist) {
            throw new NotFoundException('Usuário não encontrado!')
        }

        return value
    }
}