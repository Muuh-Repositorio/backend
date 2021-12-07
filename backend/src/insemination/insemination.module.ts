import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CowModule } from 'src/cow/cow.module';
import { SemenModule } from 'src/semen/semen.module';
import { SaveInseminationController, GetInseminationByCowController, GetInseminationsByFarmController } from './controllers/index';
import { UpdateInseminationController } from './controllers/UpdateInsemination.controller';
import { InseminationRepository, SaveInseminationInDatabase } from './repository/index';
import { UpdateInseminationInDatabase } from './repository/UpdateInsemination';
import { GetInseminationByCow, SaveInsemination, GetInseminationsByFarm } from './services/index';
import { UpdateInsemination } from './services/UpdateInsemination.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      InseminationRepository,
      SaveInseminationInDatabase,
      UpdateInseminationInDatabase
    ]),
    SemenModule,
    forwardRef(() => CowModule)
  ],
  controllers: [
    SaveInseminationController,
    GetInseminationByCowController,
    GetInseminationsByFarmController,
    UpdateInseminationController
  ],
  providers: [
    SaveInsemination,
    GetInseminationByCow,
    GetInseminationsByFarm,
    UpdateInsemination
  ],
  exports: [
    GetInseminationByCow,
    GetInseminationsByFarm
  ]
})
export class InseminationModule {}
