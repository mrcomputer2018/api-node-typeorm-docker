import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'typeormdocker',
    synchronize: true,
    logging: false,
    entities: ['src/models/*.ts'],
    migrations: ['src/database/migration/*.ts'],
    subscribers: [],
});
