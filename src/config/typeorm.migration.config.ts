import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { join } from 'path';
import { Model } from '../entities/Model.entity';
import { Category } from '../entities/Category.entity';
import { Manufacturer } from '../entities/Manufacturer.entity';
import { Discount } from '../entities/Discount.entity';

config();
const configService = new ConfigService();

const dataSource = new DataSource({
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASS'),
  database: configService.get('DB_NAME'),
  entities: [Model, Category, Manufacturer, Discount],
  migrations: [join(__dirname, '../migrations/*.{ts,js}')],
  logging: true,
});

export default dataSource;