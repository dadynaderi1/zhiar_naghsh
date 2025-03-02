import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from 'src/entities/Model.entity';
import { CreateModelDto } from '../dtos/model/create-model.dto';
import { UpdateModelDto } from '../dtos/model/update-model.dto';

@Injectable()
export class ModelService {
  constructor(
    @InjectRepository(Model)
    private modelRepository: Repository<Model>
  ) {}

  async create(createModelDto: CreateModelDto): Promise<Model> {
    const model = this.modelRepository.create({
      ...createModelDto,
      creationDate: new Date(),
      publishDate: null
    });
    return await this.modelRepository.save(model);
  }

  async findAll(): Promise<Model[]> {
    return await this.modelRepository.find({
      relations: ['category', 'manufacturer', 'discount']
    });
  }

  async findOne(id: number): Promise<Model> {
    const model = await this.modelRepository.findOne({
      where: { id },
      relations: ['category', 'manufacturer', 'discount']
    });

    if (!model) {
      throw new NotFoundException(`Model with ID ${id} not found`);
    }

    return model;
  }

  async update(id: number, updateModelDto: UpdateModelDto): Promise<Model> {
    const model = await this.findOne(id);
    Object.assign(model, updateModelDto);
    return await this.modelRepository.save(model);
  }

  async delete(id: number): Promise<void> {
    const result = await this.modelRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Model with ID ${id} not found`);
    }
  }
}
