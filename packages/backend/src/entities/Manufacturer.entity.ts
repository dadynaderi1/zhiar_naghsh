import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Model } from './Model.entity';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

@Entity()
export class Manufacturer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column({ type: 'boolean', default: false })
  @IsBoolean()
  isPartner: boolean;

  @OneToMany(() => Model, (models) => models.manufacturer)
  models: Model[];
}
