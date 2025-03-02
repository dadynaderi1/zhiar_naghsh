import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModelModule } from './model/model.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.module.config';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { DashboardModule } from './dashboard/dashboard.module'; // Make sure this is imported

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
    AuthModule,
    DashboardModule // Make sure this is included here
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
