import { Materials, Platforms, Styles } from 'src/types/Model.type';
import {
  IsOptional,
  IsEnum,
  IsInt,
  IsBoolean,
  Min,
  ArrayMinSize,
  IsArray,
  IsString
} from 'class-validator';
import { Expose, Transform } from 'class-transformer';

export class UpdateModelDto {
  @Expose()
  @IsOptional()
  @IsString()
  name?: string;

  @Expose()
  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @IsEnum(Platforms, { each: true })
  platform?: Platforms[];

  @Expose()
  @IsOptional()
  @IsInt()
  @Min(0)
  @Transform(({ value }) => (value ? parseInt(value) : undefined))
  polygonCount?: number;

  @Expose()
  @IsOptional()
  @IsEnum(Styles)
  styles?: Styles;

  @Expose()
  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @IsEnum(Materials, { each: true })
  materials?: Materials[];

  @Expose()
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => (value !== undefined ? Boolean(value) : undefined))
  isAllowedToPublish?: boolean;

  @Expose()
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => (value !== undefined ? Boolean(value) : undefined))
  isTextured?: boolean;

  @Expose()
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => (value ? parseInt(value) : undefined))
  categoryId?: number;

  @Expose()
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => (value ? parseInt(value) : undefined))
  discountId?: number;

  @Expose()
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => (value ? parseInt(value) : undefined))
  manufacturerId?: number;
}
