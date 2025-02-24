import { Materials, Platforms, Styles } from 'src/types/Model.type';
import {
  IsNotEmpty,
  IsEnum,
  IsInt,
  IsBoolean,
  Min,
  ArrayMinSize,
  IsArray,
  IsOptional
} from 'class-validator';
import { Expose, Transform } from 'class-transformer';

export class CreateModelDto {
  @Expose()
  @IsNotEmpty()
  name: string;

  @Expose()
  @IsArray()
  @ArrayMinSize(1)
  @IsEnum(Platforms, { each: true })
  platform: Platforms[];

  @Expose()
  @IsInt()
  @Min(0)
  @Transform(({ value }) => parseInt(value))
  polygonCount: number;

  @Expose()
  @IsNotEmpty()
  @IsEnum(Styles)
  styles: Styles;

  @Expose()
  @IsArray()
  @ArrayMinSize(1)
  @IsEnum(Materials, { each: true })
  materials: Materials[];

  @Expose()
  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => Boolean(value))
  isAllowedToPublish?: boolean;

  @Expose()
  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => Boolean(value))
  isTextured?: boolean;

  @Expose()
  @IsInt()
  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value))
  categoryId: number;

  @Expose()
  @IsInt()
  @IsOptional()
  @Transform(({ value }) => (value ? parseInt(value) : null))
  discountId?: number;

  @Expose()
  @IsInt()
  @IsOptional()
  @Transform(({ value }) => (value ? parseInt(value) : null))
  manufacturerId?: number;
}
