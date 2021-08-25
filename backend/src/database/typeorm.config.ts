import { TypeOrmModuleOptions } from "@nestjs/typeorm";
require('dotenv').config()

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + './../**/*.entity.js'],
    synchronize: true
}