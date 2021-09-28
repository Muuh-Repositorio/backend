import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
  ]
})
export class InseminationModule {}
