import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsNotEmpty, IsNumber, IsDate, Min, Max, IsString, Length } from 'class-validator';
import { Model } from './Model.entity';

@Entity()
export class Discount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @IsString()
  @Length(0, 255)
  description: string;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(100)
  percentage: number;

  @Column({ type: 'timestamp' })
  @IsNotEmpty()
  @IsDate()
  startDate: Date;

  @Column({ type: 'timestamp' })
  @IsNotEmpty()
  @IsDate()
  endDate: Date;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;
  @OneToMany(() => Model, (model) => model.discount)
  models: Model[];
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @IsDate()
  created_at: Date;
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP'
  })
  @IsDate()
  updated_at: Date;
  @Column({ type: 'timestamp', nullable: true })
  @IsDate()
  deleted_at: Date;
}