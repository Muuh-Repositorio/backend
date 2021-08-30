import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailValidationController, GetUserByIdController, SaveUserController } from './controllers/index';
import { UserRepository, SaveUserInDatabase } from './repository/index';
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
    EmailValidationController
  ],
  providers: [
    GetUserById,
    SaveUser,
    HashPassword,
    SendEmail,
    EmailValidation
  ]
})
export class AuthModule {}
