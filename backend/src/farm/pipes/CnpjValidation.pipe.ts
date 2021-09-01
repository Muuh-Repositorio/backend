import { Injectable, NotFoundException, PipeTransform } from "@nestjs/common";
import { GetFarmByCnpj } from "../services";

@Injectable()
export class CnpjValidation implements PipeTransform {
    constructor(private getFarmByCnpj: GetFarmByCnpj) {}

    async transform(value: any): Promise<any> {
        const cnpj_exist = await this.getFarmByCnpj.execute(value.cnpj || value)

        if (!cnpj_exist) {
            throw new NotFoundException('Fazenda não encontrada!')
        }

        return value
    }
}