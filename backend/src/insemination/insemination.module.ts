import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CowModule } from 'src/cow/cow.module';
import { SaveInseminationController, GetInseminationByCowController, ListInseminationsController } from './controllers/index';
import { InseminationRepository, SaveInseminationInDatabase } from './repository/index';
import { GetInseminationByCow, SaveInsemination, ListInseminations } from './services/index';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      InseminationRepository,
      SaveInseminationInDatabase
    ])
  ],
  controllers: [
    SaveInseminationController,
    GetInseminationByCowController,
    ListInseminationsController
  ],
  providers: [
    SaveInsemination,
    GetInseminationByCow,
    ListInseminations
  ],
  exports: [
    GetInseminationByCow
  ]
})
export class InseminationModule {}
