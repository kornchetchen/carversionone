import { CarInfo } from "src/carinfo/entities/carinfo.entity";
import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Car {

  @PrimaryGeneratedColumn('uuid')
  carId: string;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
  
  @OneToMany(() => CarInfo, (carInfo) => carInfo.carInfoId)
  carInfo: CarInfo[] //?? Cameral inverstigation Text
  
}

