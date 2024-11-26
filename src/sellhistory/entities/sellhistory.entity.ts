import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity({'name': 'sellHistory'})
export class Sellhistory {
  @PrimaryGeneratedColumn('uuid')
  sellHistoryId: string;

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

