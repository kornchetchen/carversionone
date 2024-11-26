import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { CarInfo } from "src/carinfo/entities/carinfo.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Generated, OneToMany,PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
export class CreateCarDTO {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => CarInfo, (carInfo) => carInfo.id)
  carInfo: CarInfo[];
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}