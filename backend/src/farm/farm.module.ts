import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { GetAllFarmsByUserController, GetFarmByCnpjController, SaveFarmController } from './controllers';
import { FarmRepository, SaveFarmInDatabase} from './repository/index';
import { GetAllFarmsByUser, GetFarmByCnpj, SaveFarm } from './services/index';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            SaveFarmInDatabase,
            FarmRepository
        ]),
        AuthModule
    ],
    controllers: [
        SaveFarmController,
        GetAllFarmsByUserController,
        GetFarmByCnpjController
    ],
    providers: [
        SaveFarm,
        GetAllFarmsByUser,
        GetFarmByCnpj
    ]
})
export class FarmModule {}
