import { CarInfo } from "src/carinfo/entities/carinfo.entity";
import { Entity, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({'name': 'carType'})
export class CarType {
  @PrimaryGeneratedColumn('uuid')
  carTypeId: string;

  @Column({
    type: 'enum',
    enum: ['C-SEGMENT', 'SUV', 'SEDAN', 'HRV'],
  })
  model: string;

  @CreateDateColumn({'name': 'createdAt'})
  createdAt: Date;

  @UpdateDateColumn({'name': 'updatedAt'})
  updatedAt: Date;

  @DeleteDateColumn({'name': 'deletedAt'})
  deletedAt: Date;

  @OneToMany(() => CarInfo, (carInfo) => carInfo.car)
  carInfo: CarInfo[]
}