import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InseminationModule } from 'src/insemination/insemination.module';
import { DiagnosisDate } from 'src/utils/calculations/DiagnosisDate';
import { DryingDate } from 'src/utils/calculations/DryingDate';
import { GetCowsForDryingController } from './controllers/GetCowsForDrying.controller';
import { SaveCowController, GetCowByIdController, GetCowsForDiagnosisController, GetCowsBySituationController } from './controllers/index';
import { CowRepository, SaveCowInDatabase } from './repository/index';
import { GetCowsForDrying } from './services/GetCowsForDrying.service';
import { GetCowById, SaveCow, GetCowsBySituation, GetCowsForDiagnosis } from './services/index';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CowRepository,
      SaveCowInDatabase
    ]),
    InseminationModule
  ],
  controllers: [
    SaveCowController,
    GetCowByIdController,
    GetCowsBySituationController,
    GetCowsForDiagnosisController,
    GetCowsForDryingController
  ],
  providers: [
    SaveCow,
    GetCowById,
    GetCowsBySituation,
    GetCowsForDiagnosis,
    GetCowsForDrying,
    DiagnosisDate,
    DryingDate
  ],
  exports: [
    GetCowsBySituation,
    GetCowsForDrying
  ]
})
export class CowModule {}
