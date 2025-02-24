import { Materials, Platforms, Styles } from 'src/types/Model.type';
import { Manufacturer } from 'src/entities/Manufacturer.entity';
import { Category } from 'src/entities/Category.entity';
import { Discount } from 'src/entities/Discount.entity';
import { Expose, Type } from 'class-transformer';

export class ModelDto {
  @Expose()
  id: number;
  @Expose()
  name: string;
  @Expose()
  creationDate: Date;
  @Expose()
  publishDate: Date | null;
  @Expose()
  platform: Platforms[];
  @Expose()
  polygonCount: number;
  @Expose()
  styles: Styles;
  @Expose()
  materials: Materials[];
  @Expose()
  isAllowedToPublish: boolean;
  @Expose()
  isTextured: boolean;
  @Expose()
  @Type(() => Category)
  category: Category;
  @Expose()
  @Type(() => Discount)
  discount?: Discount;
  @Expose()
  @Type(() => Manufacturer)
  manufacturer?: Manufacturer;
}
