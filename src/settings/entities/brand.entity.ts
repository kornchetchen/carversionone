import { CarInfo } from "src/carinfo/entities/carinfo.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Brand {

  @PrimaryGeneratedColumn('uuid')
  brandId: string;

  @Column({'name': 'brandName'})
  brandName: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
  
  @OneToMany(() => CarInfo, (carInfo) => carInfo.carInfoId)
  carInfo: CarInfo[] 
  
}
