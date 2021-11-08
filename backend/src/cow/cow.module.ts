import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InseminationModule } from 'src/insemination/insemination.module';
import { DiagnosisDate } from 'src/utils/calculations/DiagnosisDate';
import { DryingDate } from 'src/utils/calculations/DryingDate';
import { GetCowsByFarmController } from './controllers/GetCowsByFarm.controller';
import { GetCowsByFarm } from './services/GetCowsByFarm.service';
import { SaveCowController, GetCowByIdController, GetCowsBySituationController } from './controllers/index';
import { CowRepository, SaveCowInDatabase } from './repository/index';
import { GetCowById, SaveCow, GetCowsBySituation } from './services/index';
import { ChildbirthModule } from 'src/childbirth/Childbirth.module';
import { AbleDate } from 'src/utils/calculations/AbleDate';
import { BRtoUS } from 'src/utils/calculations/BRtoUS';
import { CowSituationsModule } from 'src/cow_situations/cow_situtations.module';
import { GetCowsAbleForController } from './controllers/GetCowsAbleFor.controller';
import { GetCowsAbleFor } from './services/GetCowsAbleFor.service';
import { UpdateCowInDatabase } from './repository/UpdateCow';
import { UpdateCowController } from './controllers/UpdateCow.controller';
import { UpdateCow } from './services/UpdateCow.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CowRepository,
      SaveCowInDatabase,
      UpdateCowInDatabase
    ]),
    InseminationModule,
    ChildbirthModule,
    CowSituationsModule
  ],
  controllers: [
    SaveCowController,
    GetCowByIdController,
    GetCowsBySituationController,
    GetCowsByFarmController,
    GetCowsAbleForController,
    UpdateCowController
  ],
  providers: [
    SaveCow,
    GetCowById,
    GetCowsBySituation,
    AbleDate,
    BRtoUS,
    DiagnosisDate,
    DryingDate,
    GetCowsByFarm,
    GetCowsAbleFor,
    UpdateCow
  ],
  exports: [
    GetCowsBySituation,
  ]
})
export class CowModule {}
