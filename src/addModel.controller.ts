import { Controller, Get, Post, Body } from '@nestjs/common';
import { ModelService } from './addModel.service';
import { Model } from './interfaces/model.interfaces';
@Controller('models')
export class ModelsController {
  constructor(private modelService: ModelService) {}

  @Post()
  async create(@Body() createModelDto: CreateModelDto) {
    await this.modelService.create(createModelDto);
  }
  @Get()
  async findAll(): Promise<Model[]> {
    return await this.modelService.findAll();
  }
}
