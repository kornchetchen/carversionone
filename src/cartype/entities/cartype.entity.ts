import { CarInfo } from "src/carinfo/entities/carinfo.entity";
import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({'name': 'carType'})
export class CarType {
  @PrimaryGeneratedColumn('uuid')
  carTypeId: string;

  @Column({
    type: 'enum',
    enum: ['C-SEGMENT', 'SUV', 'SEDAN', 'HRV'],
  })
  model: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => CarInfo, (carInfo) => carInfo.car)
  carInfo: CarInfo[]
}