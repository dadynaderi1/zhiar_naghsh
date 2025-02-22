import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Model } from './Model.entity';

@Entity()
export class Manufacturer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'string', nullable: false })
  name: string;
  @Column({ type: 'boolean', default: false })
  isPartner: boolean;
  @OneToMany(() => Model, (models) => models.manufacturer)
  models: Model[];
}
