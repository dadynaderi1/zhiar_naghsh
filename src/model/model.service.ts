import { Injectable } from '@nestjs/common';
import { Model } from 'src/entities/Model.entity';


@Injectable()
export class ModelService {
  private models: Model[] = [];
  private idCounter = 0;

  async findAll(): Promise<Model[]> {
    return this.models;
  }
  async findOne(id: number): Promise<Model> {
    const model = this.models.find((model) => model.id === id);
    if (!model) {
      throw new Error(`Model with id ${id} not found`);
    }
    return model;
  }
  create(model: Model): Model {
    model.id = this.idCounter++;
    this.models.push(model);
    return model;
  }
  async update(id: number, updatedModel: Partial<Model>): Promise<Model | null> {
    const model = this.findOne(id);
    if (!model) {
      return null;
    }
    Object.assign(model, updatedModel);
    return model;
  }
 async delete(id: number): Promise<void> {
    this.models = this.models.filter((model) => model.id !== id);
  }
}
