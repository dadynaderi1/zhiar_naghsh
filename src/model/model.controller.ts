import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { ModelService } from './model.service';
import { Model } from 'src/entities/Model.entity';

@Controller('model')
export class ModelController {
  constructor(private readonly modelService: ModelService) {}

  @Get()
  findAll(): Model[] {
    return this.modelService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Model {
    return this.modelService.findOne(+id);
  }
  @Post()
  create(@Body() model: Model): Model {
    return this.modelService.create(model);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() updatedUser: Partial<Model>): Model {
    return this.update(+id, updatedUser);
  }
  @Delete(':id')
  delete(@Param('id') id: number): void {
    return this.delete(id);
  }
}
