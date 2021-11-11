import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CowModule } from 'src/cow/cow.module';
import { SaveInseminationController, GetInseminationByCowController, ListInseminationsController } from './controllers/index';
import { UpdateInseminationController } from './controllers/UpdateInsemination.controller';
import { InseminationRepository, SaveInseminationInDatabase } from './repository/index';
import { UpdateInseminationInDatabase } from './repository/UpdateInsemination';
import { GetInseminationByCow, SaveInsemination, ListInseminations } from './services/index';
import { UpdateInsemination } from './services/UpdateInsemination.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      InseminationRepository,
      SaveInseminationInDatabase,
      UpdateInseminationInDatabase
    ])
  ],
  controllers: [
    SaveInseminationController,
    GetInseminationByCowController,
    ListInseminationsController,
    UpdateInseminationController
  ],
  providers: [
    SaveInsemination,
    GetInseminationByCow,
    ListInseminations,
    UpdateInsemination
  ],
  exports: [
    GetInseminationByCow
  ]
})
export class InseminationModule {}
