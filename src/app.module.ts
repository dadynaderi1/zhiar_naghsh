import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModelModule } from './model/model.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.module.config';
import { Model } from './entities/Model.entity';
import { Category } from './entities/Category.entity';
import { Manufacturer } from './entities/Manufacturer.entity';
import { Discount } from './entities/Discount.entity';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';
import { User } from './entities/User.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: typeOrmConfig,
      imports: [ConfigModule]
    }),
    ModelModule,
    CategoryModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
