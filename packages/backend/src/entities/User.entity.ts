import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import { IsEmail, IsNotEmpty, MinLength, IsDate } from 'class-validator';
import { Exclude } from 'class-transformer';
import { Model } from './Model.entity';
import { UserRole } from '@zhiarnaghsh/shared';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @Column({ unique: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column()
  @IsNotEmpty()
  first_name: string;

  @Column()
  @IsNotEmpty()
  last_name: string;

  @Column()
  @IsNotEmpty()
  @MinLength(8)
  @Exclude({ toPlainOnly: true })
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.ARTIST })
  @IsNotEmpty()
  role: UserRole;

  @Column({ default: false })
  isActive: boolean;

  @CreateDateColumn()
  @IsDate()
  created_at: Date;

  @Column({ nullable: true })
  companyName: string;

  @UpdateDateColumn()
  @IsDate()
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  @IsDate()
  deleted_at: Date;

  @OneToMany(() => Model, (model) => model.creator, { nullable: true })
  models: Model[];
}
