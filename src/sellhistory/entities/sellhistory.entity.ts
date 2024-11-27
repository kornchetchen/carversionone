import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';


@Entity({'name': 'sellHistory'})
export class Sellhistory {
  @PrimaryGeneratedColumn('uuid')
  sellHistoryId: string;

  @Column({name: 'price'})
  price: number;

  @Column({name: 'name'})
  name: string;

  @Column({name: 'startPromotion'})
  startPromotion: Date;

  @Column({name: 'endPromotion'})
  endPromotion: Date;

  @Column({name: 'model'})
  model: string;

  @Column({name: 'brand'})
  brand: string;

  @Column({'name': 'color'})
  color: string;

  @Column({'name': 'year'})
  year: number; 

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}

