import { Car } from "src/cars/entities/car.entity";
import { CarType } from "src/cartype/entities/cartype.entity";
import { Promotion } from "src/promotion/entities/promotion.entity";
import { Entity, Column, PrimaryColumn, ManyToOne, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
// export enum DriveType {
//     TWO_WHEEL_DRIVE = '2WD',
//     FOUR_WHEEL_DRIVE = '4WD',
//   }
@Entity()
export class CarInfo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  isActive: boolean;

  @Column()
  year: number;

  @Column()
  price: number;

  @Column()
  color: string;

  @Column()
  isAWD: boolean; 

  @ManyToOne(() => Car, (car) => car.id)
  car: Car
  @ManyToOne(() => CarType, (cartype) => cartype.id)
  cartype: CarType

  @ManyToMany(() => Promotion, (promotion) => promotion.id)
  promotion: Promotion[]
}