import { CarType } from "src/settings/entities/cartype.entity";
import { Promotion } from "src/promotion/entities/promotion.entity";
import { Entity, Column, PrimaryColumn, ManyToOne, ManyToMany, PrimaryGeneratedColumn, JoinTable, CreateDateColumn, DeleteDateColumn, UpdateDateColumn, JoinColumn } from "typeorm";
import { Brand } from "src/settings/entities/brand.entity";
@Entity({'name': 'carInfo'})
export class CarInfo {
  @PrimaryGeneratedColumn('uuid')
  carInfoId: string;

  @Column({'name': 'carInfoName'})
  carInfoName: string;

  @Column({'name':'isActive'})
  isActive: boolean;

  @Column({'name':'year'})
  year: number;

  @Column({'name':'price'})
  price: number;

  @Column({'name':'color'})
  color: string;

  @Column({'name':'isAWD'})
  isAWD: boolean; 

  @ManyToOne(() =>CarType , (CarType) => CarType.carInfo)
  @JoinColumn({ name: 'carTypeId' })
  carType: CarType


  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Brand, (brand) => brand.carInfo)
  @JoinColumn({ name: 'brandId' })
  brand: Brand
  
  @ManyToMany(() => Promotion )
  @JoinTable({'name': 'promotionCarInfo'})
  promotion: Promotion[]

}