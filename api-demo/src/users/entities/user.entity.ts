import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  Admin = 'ADMIN',
  Client = 'CLIENT',
  Seller = 'SELLER',
}

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column({ enum: UserRole, default: UserRole.Client })
  role: UserRole;
}
