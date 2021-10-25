import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { GetBirthsByFarmController } from './controllers/GetBirthsByFarm.controller';
import { ChildbirthByCowController } from './controllers/GetChildbirthByCow.controller';
import { GetChildbirthByDateController } from './controllers/GetChildbirthByDate.controller';
import { SaveChildbirthController } from './controllers/SaveChildbirth.controller';
import { ChildbirthRepository } from './repository/ChildbirthRepository';
import { SaveChildbirthInDatabase } from './repository/SaveChildbirthInDatabase';
import { GetBirthsByFarm } from './services/GetBirthsByFarm.service';
import { GetChildbirthByCow } from './services/GetChildbirthByCow.service';
import { GetChildbirthByDate } from './services/GetChildbirthByDate.service';
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
        GetBirthsByFarmController,
        ChildbirthByCowController,
        GetChildbirthByDateController
    ],
    providers: [
        SaveChildbirth,
        GetBirthsByFarm,
        GetChildbirthByCow,
        GetChildbirthByDate
    ],
    exports: [
        GetChildbirthByCow,
        GetChildbirthByDate
    ]
})
export class ChildbirthModule { }
