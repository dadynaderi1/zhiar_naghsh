import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelController } from './model.controller';
import { ModelService } from './model.service';
import { Model } from '../entities/Model.entity';
import { Category } from '../entities/Category.entity';
import { Manufacturer } from '../entities/Manufacturer.entity';
import { Discount } from '../entities/Discount.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Model, Category, Manufacturer, Discount])
  ],
  controllers: [ModelController],
  providers: [ModelService],
  exports: [ModelService]
})
export class ModelModule {}
