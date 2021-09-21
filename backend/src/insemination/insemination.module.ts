import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaveInseminationController, GetInseminationByIdController } from './controllers/index';
import { InseminationRepository, SaveInseminationInDatabase } from './repository/index';
import { GetInseminationById, SaveInsemination } from './services/index';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      InseminationRepository,
      SaveInseminationInDatabase
    ])
  ],
  controllers: [
    SaveInseminationController,
    GetInseminationByIdController
  ],
  providers: [
    SaveInsemination,
    GetInseminationById
  ]
})
export class InseminationModule {}
