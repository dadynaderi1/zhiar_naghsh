import { Materials, Platforms, Styles } from '../types/Model.type';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Manufacturer } from './Manufacturer.entity';
import { User } from './User.entity';
import { Discount } from './Discount.entity';
import {
  IsNotEmpty,
  IsDate,
  IsEnum,
  IsInt,
  IsBoolean,
  Min,
  ArrayMinSize,
  IsArray,
  IsOptional
} from 'class-validator';
import { Category } from './Category.entity';

@Entity()
export class Model {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  @IsNotEmpty()
  name: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @IsDate()
  creationDate: Date;

  @Column({ type: 'timestamp', nullable: true })
  @IsDate()
  publishDate: Date | null;

  @Column({ type: 'enum', array: true, enum: Platforms })
  @IsArray()
  @ArrayMinSize(1)
  @IsEnum(Platforms, { each: true })
  platform: Platforms[];

  @Column({ type: 'integer' })
  @IsInt()
  @Min(0)
  polygonCount: number;

  @Column({ type: 'enum', enum: Styles })
  @IsNotEmpty()
  @IsEnum(Styles)
  styles: Styles;

  @Column({ type: 'enum', enum: Materials, array: true })
  @IsArray()
  @ArrayMinSize(1)
  @IsEnum(Materials, { each: true })
  materials: Materials[];

  @Column({ type: 'boolean', default: false })
  @IsBoolean()
  isAllowedToPublish: boolean;

  @Column({ type: 'boolean', default: false })
  @IsBoolean()
  isTextured: boolean;

  @Column({ type: 'int', nullable: false })
  @IsInt()
  @IsNotEmpty()
  categoryId: number;

  @ManyToOne(() => Discount, (discount) => discount.models, {
    nullable: true,
    onDelete: 'SET NULL'
  })
  discount: Discount;

  @Column({ type: 'int', nullable: true })
  @IsInt()
  discountId: number;

  @ManyToOne(() => Manufacturer, (manufacturer) => manufacturer.models, {
    nullable: true,
    onDelete: 'SET NULL'
  })
  manufacturer: Manufacturer;

  @ManyToOne(() => Category, (category) => category.models, {
    nullable: false,
    onDelete: 'RESTRICT'
  })
  category: Category;
  // Add this import at the top of the file
  
  @ManyToOne(() => User, (user) => user.models, {
    nullable: true,
    onDelete: 'SET NULL'
  })
  creator: User;

  @Column({ type: 'int', nullable: true })
  @IsInt()
  @IsOptional()
  creatorId: number;
}
