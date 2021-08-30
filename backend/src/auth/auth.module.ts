import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetUserByIdController, SaveUserController } from './controllers/index';
import { UserRepository, SaveUserInDatabase } from './repository/index';
import { GetUserById, HashPassword, SaveUser } from './services/index';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserRepository,
      SaveUserInDatabase
    ])
  ],
  controllers: [
    SaveUserController,
    GetUserByIdController
  ],
  providers: [
    GetUserById,
    SaveUser,
    HashPassword
  ]
})
export class AuthModule {}
