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
import { WeightHistoryModule } from 'src/weight_history/weight_history.module';
import { TypeCowModule } from 'src/type_cow/TypeCow.module';
import { ValidateCow } from './services/ValidateCow.service';
import { ValidateCowController } from './controllers/ValidateCow.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CowRepository,
      SaveCowInDatabase,
      UpdateCowInDatabase
    ]),
    InseminationModule,
    ChildbirthModule,
    CowSituationsModule,
    WeightHistoryModule,
    TypeCowModule
  ],
  controllers: [
    SaveCowController,
    GetCowByIdController,
    GetCowsBySituationController,
    GetCowsByFarmController,
    GetCowsAbleForController,
    UpdateCowController,
    ValidateCowController
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
    UpdateCow,
    ValidateCow
  ],
  exports: [
    GetCowsBySituation,
    GetCowsByFarm,
    GetCowsAbleFor,
    UpdateCow
  ]
})
export class CowModule {}
