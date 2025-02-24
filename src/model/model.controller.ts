import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { ModelService } from './model.service';
import { Model } from 'src/entities/Model.entity';

@Controller('model')
export class ModelController {
  constructor(private readonly modelService: ModelService) {}
  @HttpCode(200)
  @Get()
  async findAll(): Promise<Model[]> {
    return this.modelService.findAll();
  }
  @HttpCode(200)
  @Get(':id')
 async findOne(@Param('id') id: string): Promise<Model> {
    return this.modelService.findOne(+id);
  }
  @HttpCode(201)
  @Post()
  async create(@Body() model: Model): Promise<Model> {
    return this.modelService.create(model);
  }
  @HttpCode(200)
  @Put(':id')
  async update(@Param('id') id: number, @Body() updatedUser: Partial<Model>): Promise<Model> {
    return this.update(+id, updatedUser);
  }
  @HttpCode(204)
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.delete(id);
  }
}
