import { Injectable } from '@nestjs/common';
import { Model } from './interfaces/model.interfaces';
@Injectable()
export class ModelService {
  private readonly models: Model[] = [];
  create(model: Model) {
    this.models.push(model);
  }
  findAll(): Model[] {
    return this.models;
  }
}
