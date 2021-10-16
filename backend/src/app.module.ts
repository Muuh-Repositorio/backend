import { ChildbirthModule } from './childbirth/Childbirth.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './database/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { FarmModule } from './farm/farm.module';
import { CowModule } from './cow/cow.module';
import { TypeCowModule } from './type_cow/TypeCow.module';
import { InseminationModule } from './insemination/insemination.module';
import { CowSituationsModule } from './cow_situations/cow_situtations.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    FarmModule,
    CowModule,
    ChildbirthModule,
    TypeCowModule,
    InseminationModule,
    CowSituationsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
