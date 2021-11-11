import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/Interfaces/ServiceCommand";
import { UpdateUserInDatabase } from "../repository/UpdateUserInDatabase";
import { UpdateUserDto } from "../dto/UpdateUserDto";

@Injectable()
export class UpdateUser implements ServiceCommand {

    constructor(
        @InjectRepository(UpdateUserInDatabase)
        private updateUserInDatabase: UpdateUserInDatabase,
    ) {}

    async execute(userDto: UpdateUserDto, idt_user: number): Promise<any> {
        return await this.updateUserInDatabase.execute(userDto, idt_user)
    }
}