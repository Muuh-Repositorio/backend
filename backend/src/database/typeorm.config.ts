import { TypeOrmModuleOptions } from "@nestjs/typeorm";
require('dotenv').config()

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "detonador",
    database: "muuh",
    entities: [__dirname + './../**/*.entity.js'],
    synchronize: true
}