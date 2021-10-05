import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetCowsBySituationController } from './controllers/GetCowsBySituation.controller';
import { SaveCowController, GetCowByIdController } from './controllers/index';
import { CowRepository, SaveCowInDatabase } from './repository/index';
import { GetCowById, SaveCow, GetCowsBySituation } from './services/index';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CowRepository,
      SaveCowInDatabase
    ])
  ],
  controllers: [
    SaveCowController,
    GetCowByIdController,
    GetCowsBySituationController
  ],
  providers: [
    SaveCow,
    GetCowById,
    GetCowsBySituation
  ]
})
export class CowModule {}
