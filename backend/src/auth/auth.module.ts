import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetUserByCpfController } from './controllers/GetUserByCpf.controller';
import { EmailValidationController, GetUserByIdController, SaveUserController } from './controllers/index';
import { UserRepository, SaveUserInDatabase } from './repository/index';
import { GetUserByCpf } from './services/GetUserByCpf.service';
import { EmailValidation, GetUserById, HashPassword, SaveUser, SendEmail } from './services/index';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserRepository,
      SaveUserInDatabase
    ])
  ],
  controllers: [
    SaveUserController,
    GetUserByIdController,
    GetUserByCpfController,
    EmailValidationController
  ],
  providers: [
    GetUserById,
    GetUserByCpf,
    SaveUser,
    HashPassword,
    SendEmail,
    EmailValidation
  ]
})
export class AuthModule {}
