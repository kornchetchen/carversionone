import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Sellhistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  name: string;

  @Column()
  startPromotion: Date;

  @Column()
  endPromotion: Date;

  @Column()
  model: string;

  @Column()
  brand: string;

  @Column()
  color: string;

  @Column()
  year: number; 
}

