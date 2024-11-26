import { CarInfo } from "src/carinfo/entities/carinfo.entity";
import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToMany, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";

export enum TypeDiscount {
  percentage = 'percentage',
  THB = 'THB',
}

@Entity({name: 'promotion'})
export class Promotion {
  @PrimaryGeneratedColumn('uuid')
  promotionId: string;

  @Column()
  title: string;

  @Column()
  description: string;
  @Column({
    type: 'enum',
    enum: TypeDiscount,
  })
  discountType: TypeDiscount;

  @Column('decimal')
  discount: number;
  
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

  // @OneToMany(()=> PromotionCarInfo, (promotionCarInfo) => promotionCarInfo.promotion)
  // promotionCarInfo: PromotionCarInfo[]
  // @ManyToMany(() => CarInfo, (carInfo) => carInfo.id)
  // carInfo: CarInfo[]
}