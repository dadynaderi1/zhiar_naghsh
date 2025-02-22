import { Injectable } from '@nestjs/common';
import { Model } from 'src/entities/Model.entity';

@Injectable()
export class ModelService {
  private models: Model[] = [];
  private idCounter = 0;

  findAll(): Model[] {
    return this.models;
  }
  findOne(id: number): Model {
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
  update(id: number, updatedModel: Partial<Model>): Model | null {
    const model = this.findOne(id);
    if (!model) {
      return null;
    }
    Object.assign(model, updatedModel);
    return model;
  }
  delete(id: number): void {
    this.models = this.models.filter((model) => model.id !== id);
  }
}
