import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaveCowController, GetCowByIdController } from './controllers/index';
import { CowRepository, SaveCowInDatabase } from './repository/index';
import { GetCowById, SaveCow } from './services/index';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CowRepository,
      SaveCowInDatabase
    ])
  ],
  controllers: [
    SaveCowController,
    GetCowByIdController
  ],
  providers: [
    SaveCow,
    GetCowById
  ]
})
export class CowModule {}
