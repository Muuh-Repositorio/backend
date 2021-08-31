import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaveCowController } from './controllers/index';
import { SaveCowInDatabase } from './repository/index';
import { SaveCow } from './services/index';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SaveCowInDatabase
    ])
  ],
  controllers: [
    SaveCowController,
  ],
  providers: [
    SaveCow,
  ]
})
export class AuthModule {}
