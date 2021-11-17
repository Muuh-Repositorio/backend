import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ChildbirthModule } from 'src/childbirth/Childbirth.module';
import { CowModule } from 'src/cow/cow.module';
import { InseminationModule } from 'src/insemination/insemination.module';
import { GetAllFarmsByUserController, GetFarmByCnpjController, SaveFarmController } from './controllers';
import { GetStatsByFarmController } from './controllers/GetStatsByFarm.controller';
import { FarmRepository, SaveFarmInDatabase} from './repository/index';
import { GetStatsByFarm } from './services/GetStatsByFarm.service';
import { GetAllFarmsByUser, GetFarmByCnpj, SaveFarm } from './services/index';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            SaveFarmInDatabase,
            FarmRepository
        ]),
        AuthModule,
        CowModule,
        InseminationModule,
        ChildbirthModule
    ],
    controllers: [
        SaveFarmController,
        GetAllFarmsByUserController,
        GetFarmByCnpjController,
        GetStatsByFarmController
    ],
    providers: [
        SaveFarm,
        GetAllFarmsByUser,
        GetFarmByCnpj,
        GetStatsByFarm
    ]
})
export class FarmModule {}
