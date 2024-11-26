import { CarInfo } from "src/carinfo/entities/carinfo.entity";
import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

export enum TypeDiscount {
  percentage = 'percentage',
  THB = 'THB',
}

@Entity()
export class Promotion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;
  @Column({
    type: 'enum',
    enum: TypeDiscount,
  })
  discountType: TypeDiscount;

  @Column()
  startPromotion: Date;

  @Column()
  endPromotion: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToMany(() => CarInfo, (carInfo) => carInfo.id)
  carInfo: CarInfo[]
}