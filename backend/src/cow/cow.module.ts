import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InseminationModule } from 'src/insemination/insemination.module';
import { DiagnosisDate } from 'src/utils/calculations/DiagnosisDate';
import { DryingDate } from 'src/utils/calculations/DryingDate';
import { GetCowsByFarmController } from './controllers/GetCowsByFarm.controller';
import { GetCowsByFarm } from './services/GetCowsByFarm.service';
import { GetCowsForInseminationController } from './controllers/GetCowsForInsemination.controller';
import { GetCowsForDryingController } from './controllers/GetCowsForDrying.controller';
import { SaveCowController, GetCowByIdController, GetCowsForDiagnosisController, GetCowsBySituationController } from './controllers/index';
import { CowRepository, SaveCowInDatabase } from './repository/index';
import { GetCowsForInsemination } from './services/GetCowsForInsemination';
import { GetCowsForDrying } from './services/GetCowsForDrying.service';
import { GetCowById, SaveCow, GetCowsBySituation, GetCowsForDiagnosis } from './services/index';
import { GetAbleCowsAfterChildbirth } from './services/GetAbleCowsAfterChildbirth';
import { GetAbleCowsAfterChildbirthController } from './controllers/GetAbleCowsAfterChildbirth.controller';
import { ChildbirthModule } from 'src/childbirth/Childbirth.module';
import { AbleDate } from 'src/utils/calculations/AbleDate';
import { BRtoUS } from 'src/utils/calculations/BRtoUS';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CowRepository,
      SaveCowInDatabase
    ]),
    InseminationModule,
    ChildbirthModule
  ],
  controllers: [
    SaveCowController,
    GetCowByIdController,
    GetCowsBySituationController,
    GetCowsForDiagnosisController,
    GetCowsForDryingController,
    GetCowsByFarmController,
    GetCowsForInseminationController,
    GetAbleCowsAfterChildbirthController
  ],
  providers: [
    SaveCow,
    GetCowById,
    GetCowsBySituation,
    GetCowsForDiagnosis,
    GetCowsForDrying,
    GetCowsForInsemination,
    GetAbleCowsAfterChildbirth,
    AbleDate,
    BRtoUS,
    DiagnosisDate,
    DryingDate,
    GetCowsByFarm
  ],
  exports: [
    GetCowsBySituation,
    GetCowsForDrying
  ]
})
export class CowModule {}
