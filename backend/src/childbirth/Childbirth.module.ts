import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { GetBirthsByFarmController } from './controllers/GetBirthsByFarm.controller';
import { SaveChildbirthController } from './controllers/SaveChildbirth.controller';
import { ChildbirthRepository } from './repository/ChildbirthRepository';
import { SaveChildbirthInDatabase } from './repository/SaveChildbirthInDatabase';
import { GetBirthsByFarm } from './services/GetBirthsByFarm.service';
import { SaveChildbirth } from './services/SaveChildbirth.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            SaveChildbirthInDatabase,
            ChildbirthRepository
        ]),
        AuthModule
    ],
    controllers: [
        SaveChildbirthController,
        GetBirthsByFarmController
    ],
    providers: [
        SaveChildbirth,
        GetBirthsByFarm
    ],
})
export class ChildbirthModule { }
