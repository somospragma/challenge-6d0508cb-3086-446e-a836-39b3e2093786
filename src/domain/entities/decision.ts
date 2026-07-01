import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Decision {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  role: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}