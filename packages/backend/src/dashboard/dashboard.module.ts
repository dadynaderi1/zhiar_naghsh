import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { Model } from '../entities/Model.entity';
import { User } from '../entities/User.entity';
import { Category } from '../entities/Category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Model, User, Category])],
  controllers: [DashboardController],
  providers: [DashboardService],
  exports: [DashboardService],
})
export class DashboardModule {}