import { Materials, Platforms, Styles } from 'src/types/Model.type';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Manufacturer } from './Manufacturer.entity';
@Entity()
export class Model {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ type: 'timestamp' })
  creationDate: Date;
  @Column({ type: 'timestamp', nullable: true })
  publishDate: Date | null;
  @Column({ type: 'enum', array: true, enum: Platforms })
  platform: Platforms;
  @Column({ type: 'integer' })
  polygonCount: number;
  @Column({ type: 'enum', enum: Styles })
  styles: Styles;
  @Column({ type: 'enum', enum: Materials, array: true })
  materials: Materials[];
  @Column({ type: 'boolean', default: false })
  isAllowedToPublish: boolean;
  @Column({ type: 'boolean', default: false })
  isTextured: boolean;
  @ManyToOne(() => Manufacturer, (manufacturer) => manufacturer.models, {
    nullable: true
  })
  manufacturer: Manufacturer[];
}
