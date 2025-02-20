import { Module } from '@nestjs/common';
import { modelController } from './addModel.controller';
import { ModelService } from './addModel.service';

@Module({
  imports: [],
  controllers: [modelController],
  providers: [ModelService]
})
export class ModelModule {}
