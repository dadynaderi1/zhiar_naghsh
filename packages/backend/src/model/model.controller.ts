import {
  BadRequestException,
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseInterceptors,
  UsePipes,
  InternalServerErrorException
} from '@nestjs/common';
import { ModelService } from './model.service';
import { Model } from 'src/entities/Model.entity';
import { CreateModelDto } from '../dtos/model/create-model.dto';
import { UpdateModelDto } from '../dtos/model/update-model.dto';
import { ModelDto } from '../dtos/model/model.dto';
import { ValidationPipe } from '../pipes/validation.pipe';

@Controller('model')
@UseInterceptors(ClassSerializerInterceptor)
export class ModelController {
  constructor(private readonly modelService: ModelService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createModelDto: CreateModelDto): Promise<ModelDto> {
    try {
      if (!createModelDto) {
        throw new BadRequestException('Invalid request body');
      }

      const model = new Model();
      Object.assign(model, {
        ...createModelDto,
        creationDate: new Date(),
        publishDate: null
      });

      return await this.modelService.create(model);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      if (error.code === '23505') {
        // Unique constraint violation
        throw new BadRequestException('A model with this name already exists');
      }

      if (error.code === '23503') {
        // Foreign key violation
        throw new BadRequestException(
          'Referenced category, manufacturer or discount does not exist'
        );
      }

      throw new InternalServerErrorException('Failed to create model');
    }
  }

  @Get()
  async findAll(): Promise<ModelDto[]> {
    try {
      return await this.modelService.findAll();
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch models');
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ModelDto> {
    try {
      const model = await this.modelService.findOne(+id);
      if (!model) {
        throw new NotFoundException(`Model with ID ${id} not found`);
      }
      return model;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to fetch model');
    }
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async update(
    @Param('id') id: string,
    @Body() updateModelDto: UpdateModelDto
  ): Promise<ModelDto> {
    try {
      const updatedModel = await this.modelService.update(+id, updateModelDto);
      if (!updatedModel) {
        throw new NotFoundException(`Model with ID ${id} not found`);
      }
      return updatedModel;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      if (error.code === '23505') {
        throw new BadRequestException('A model with this name already exists');
      }
      if (error.code === '23503') {
        throw new BadRequestException(
          'Referenced category, manufacturer or discount does not exist'
        );
      }
      throw new InternalServerErrorException('Failed to update model');
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string): Promise<void> {
    try {
      await this.modelService.delete(+id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to delete model');
    }
  }
}
