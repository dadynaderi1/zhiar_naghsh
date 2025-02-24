import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsNotEmpty, IsString, Length } from 'class-validator';
import { Model } from './Model.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @IsString()
  description: string;

  @OneToMany(() => Model, (model) => model.category)
  models: Model[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP'
  })
  updated_at: Date;
}
