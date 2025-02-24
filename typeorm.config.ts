import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Model } from './src/entities/Model.entity';
import { Category } from './src/entities/Category.entity';
import { Manufacturer } from './src/entities/Manufacturer.entity';
import { Discount } from './src/entities/Discount.entity';
import { DataSource } from 'typeorm';

config();
const configService = new ConfigService();

const AppDataSource = new DataSource({
    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USER'),
    password: configService.get('DB_PASS'),
    database: configService.get('DB_NAME'),
    entities: [Model, Category, Manufacturer, Discount],
    migrations: ['src/migrations/*.ts'],
    synchronize: false,
    logging: true,
});

export default AppDataSource;