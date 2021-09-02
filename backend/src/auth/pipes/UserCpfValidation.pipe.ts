
import { PipeTransform, Injectable, ArgumentMetadata, NotFoundException } from '@nestjs/common';
import { GetUserByCpf } from '../services/GetUserByCpf.service';

@Injectable()
export class UserCpfValidation implements PipeTransform {
  constructor( private getUserByCpf: GetUserByCpf ){

  }
  
  async transform(value: any): Promise<any> {
    const cpf_exist = await this.getUserByCpf.execute(value.cpf || value)

    if(!cpf_exist){
      throw new NotFoundException('Usuário não encontrado!')
    }

    return value
  }
}
