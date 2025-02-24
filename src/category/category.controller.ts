import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UseInterceptors,
  ClassSerializerInterceptor,
  ParseIntPipe,
  BadRequestException,
  InternalServerErrorException
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from '../dtos/category/create-category.dto';
import { UpdateCategoryDto } from '../dtos/category/update-category.dto';
import { CategoryDto } from '../dtos/category/category.dto';
import { ValidationPipe } from '../pipes/validation.pipe';
import { Category } from 'src/entities/Category.entity';

@Controller('categories')
@UseInterceptors(ClassSerializerInterceptor)
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
@UseInterceptors(ValidationPipe)
  async create(@Body() createCategoryDto: CreateCategoryDto): Promise<CategoryDto> {
    try {
      const category = await this.categoryService.create(createCategoryDto);
      return this.mapToDto(category);
    } catch (error) {
      if (error.status === 409) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to create category');
    }
  }

  @Get()
  async findAll(): Promise<CategoryDto[]> {
    try {
      const categories = await this.categoryService.findAll();
      return categories.map(category => this.mapToDto(category));
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch categories');
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<CategoryDto> {
    try {
      const category = await this.categoryService.findOne(id);
      return this.mapToDto(category);
    } catch (error) {
      if (error.status === 404) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to fetch category');
    }
  }

  @Patch(':id')
@UseInterceptors(ValidationPipe)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCategoryDto: UpdateCategoryDto
  ): Promise<CategoryDto> {
    try {
      const category = await this.categoryService.update(id, updateCategoryDto);
      return this.mapToDto(category);
    } catch (error) {
      if (error.status === 404 || error.status === 409) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to update category');
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    try {
      await this.categoryService.remove(id);
    } catch (error) {
      if (error.status === 404) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to delete category');
    }
  }

  private mapToDto(category: Category): CategoryDto {
    return {
      id: category.id,
      name: category.name,
      description: category.description,
      created_at: category.created_at,
      updated_at: category.updated_at
    };
  }
}