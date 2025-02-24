import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsDate,
  IsEnum
} from 'class-validator';

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
  password: string;

  @Column()
  @IsNotEmpty()
  @IsEnum(['admin', 'user'])
  role: string;

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
