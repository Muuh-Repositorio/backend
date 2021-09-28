import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { SaveTypeCowController } from './controllers/SaveTypeCow';
import { SaveTypeCowInDatabase } from './repository/SaveTypeCowInDatabase';
import { TypeCowRepository } from './repository/TypeCowRepository';
import { SaveTypeCow } from './services/SaveTypeCow.service';


@Module({
    imports: [
        TypeOrmModule.forFeature([
            SaveTypeCowInDatabase,
            TypeCowRepository
        ]),
        AuthModule
    ],
    controllers: [
        SaveTypeCowController
    ],
    providers: [
        SaveTypeCow
    ],
})
export class TypeCowModule { }
