import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetUserByIdController, SaveUserController } from './controllers/index';
import { UserRepository, SaveUserInDatabase } from './repository/index';
import { GetUserById, SaveUser } from './services/index';

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
    SaveUser
  ]
})
export class AuthModule {}
