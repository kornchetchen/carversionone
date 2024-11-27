import { CarInfo } from "src/promotions/entities/carinfo.entity";
import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToMany, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";

export enum TypeDiscount {
  percentage = 'percentage',
  THB = 'THB',
}

@Entity({name: 'promotion'})
export class Promotion {
  @PrimaryGeneratedColumn('uuid')
  promotionId: string;

  @Column({'name': 'promotionTitle'})
  promotionTitle: string;

  @Column({'name': 'description'})
  description: string;
  @Column({
    type: 'enum',
    enum: TypeDiscount,
  })
  discountType: TypeDiscount;

  @Column('decimal')
  discount: number;
  
  @Column({'name': 'startPromotion'})
  startPromotion: Date;

  @Column({'name': 'endPromotion'})
  endPromotion: Date;

  @CreateDateColumn({'name': 'createdAt'})
  createdAt: Date;

  @UpdateDateColumn({'name': 'updatedAt'})
  updatedAt: Date;

  @DeleteDateColumn({'name': 'deletedAt'})
  deletedAt: Date;

  // @OneToMany(()=> PromotionCarInfo, (promotionCarInfo) => promotionCarInfo.promotion)
  // promotionCarInfo: PromotionCarInfo[]
  // @ManyToMany(() => CarInfo, (carInfo) => carInfo.id)
  // carInfo: CarInfo[]
}