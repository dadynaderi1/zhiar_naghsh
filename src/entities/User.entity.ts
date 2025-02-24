import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column()
  password: string;
  @Column()
  role: string;
  @Column()
  created_at: Date;
  @Column()
  updated_at: Date;
  @Column()
  deleted_at: Date;
}
