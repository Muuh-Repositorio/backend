import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaveFarmController } from './controllers';
import { FarmRepository, SaveFarmInDatabase} from './repository/index';
import { SaveFarm } from './services/index';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            SaveFarmInDatabase,
            FarmRepository
        ])
    ],
    controllers: [
        SaveFarmController
    ],
    providers: [
        SaveFarm
    ]
})
export class FarmModule {}
