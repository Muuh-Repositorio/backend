import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { SaveTypeCowController } from './controllers/SaveTypeCow.controller';
import { GetCowTypesController } from './controllers/GetCowTypes.controller';
import { SaveTypeCowInDatabase } from './repository/SaveTypeCowInDatabase';
import { TypeCowRepository } from './repository/TypeCowRepository';
import { GetCowTypes } from './services/GetCowTypes.service';
import { SaveTypeCow } from './services/SaveTypeCow.service';
import { CowModule } from 'src/cow/cow.module';


@Module({
    imports: [
        TypeOrmModule.forFeature([
            SaveTypeCowInDatabase,
            TypeCowRepository
        ]),
        AuthModule,
        CowModule
    ],
    controllers: [
        SaveTypeCowController,
        GetCowTypesController
    ],
    providers: [
        SaveTypeCow,
        GetCowTypes
    ],
})
export class TypeCowModule { }
