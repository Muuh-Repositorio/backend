import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './controllers/Auth.controller';
import { GetUserByCpfController } from './controllers/GetUserByCpf.controller';
import { EmailValidationController, GetUserByIdController, SaveUserController, ValidateTokenController } from './controllers/index';
import { JwtStrategy } from './jwt/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './jwt/local.strategy';
import { UserIdValidation } from './pipes';
import { UserRepository, SaveUserInDatabase } from './repository/index';
import { AuthService } from './services/Auth.service';
import { GetUserByCpf } from './services/GetUserByCpf.service';
import { EmailValidation, GetUserById, HashPassword, SaveUser, SendEmail, ValidateToken } from './services/index';
import { UserCpfValidation } from './pipes/usercpfvalidation.pipe';
require('dotenv').config()

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserRepository,
      SaveUserInDatabase,
    ]),
    JwtModule.register({
      secret: process.env.secretPassword,
      signOptions: { expiresIn: '60m' }
    })
  ],
  controllers: [
    SaveUserController,
    GetUserByIdController,
    GetUserByCpfController,
    EmailValidationController,
    AuthController,
    ValidateTokenController
  ],
  providers: [
    GetUserById,
    GetUserByCpf,
    SaveUser,
    HashPassword,
    SendEmail,
    EmailValidation,
    LocalStrategy,
    AuthService,
    JwtStrategy,
    UserIdValidation,
    UserCpfValidation,
    ValidateToken
  ],
  exports: [
    AuthService,
    UserIdValidation,
    GetUserById,
    UserCpfValidation,
    GetUserByCpf
  ]
})
export class AuthModule {}
