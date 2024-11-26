import { Car } from "src/cars/entities/car.entity";
import { CarType } from "src/cartype/entities/cartype.entity";
import { Promotion } from "src/promotion/entities/promotion.entity";
import { Entity, Column, PrimaryColumn, ManyToOne, ManyToMany, PrimaryGeneratedColumn, JoinTable } from "typeorm";
// export enum DriveType {
//     TWO_WHEEL_DRIVE = '2WD',
//     FOUR_WHEEL_DRIVE = '4WD',
//   }
@Entity({'name': 'carInfo'})
export class CarInfo {
  @PrimaryGeneratedColumn('uuid')
  carinfoId: string;

  @Column()
  carinfo_name: string;

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

  @ManyToOne(() => Car, (car) => car.carInfo)
  car: Car

  @ManyToOne(() =>CarInfo , (CarInfo) => CarInfo.car)
  cartype: CarType
  
  @ManyToMany(() => Promotion)
  @JoinTable({'name': 'promotionCarInfo'}) ///carmel case 
  promotion: Promotion[]

}