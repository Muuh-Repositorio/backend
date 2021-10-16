import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InseminationModule } from 'src/insemination/insemination.module';
import { DiagnosisDate } from 'src/utils/calculations/DiagnosisDate';
import { DryingDate } from 'src/utils/calculations/DryingDate';
import { SaveCowController, GetCowByIdController, GetCowsForDiagnosisController, GetCowsBySituationController } from './controllers/index';
import { CowRepository, SaveCowInDatabase } from './repository/index';
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
    GetCowsForDiagnosisController
  ],
  providers: [
    SaveCow,
    GetCowById,
    GetCowsBySituation,
    GetCowsForDiagnosis,
    DiagnosisDate,
    DryingDate
  ],
  exports: [
    GetCowsBySituation
  ]
})
export class CowModule {}
