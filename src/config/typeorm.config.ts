import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Model } from '../entities/Model.entity';
import { Category } from '../entities/Category.entity';
import { Manufacturer } from '../entities/Manufacturer.entity';
import { Discount } from '../entities/Discount.entity';

export const typeOrmConfig = (
  configService: ConfigService
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASS'),
  database: configService.get('DB_NAME'),
  entities: [Model, Category, Manufacturer, Discount],
  synchronize: true
});
