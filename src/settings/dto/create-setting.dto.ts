import { CarInfo } from "src/carinfo/entities/carinfo.entity";
import { Column, CreateDateColumn, DeleteDateColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


export class CreateSettingDto {

    @PrimaryGeneratedColumn('uuid')
    settingId: string;
    
    @PrimaryGeneratedColumn('uuid')
    brandId: string;
  
    @Column({'name': 'carName'})
    brandName: string;
    
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

    @OneToMany(() => CarInfo, (carInfo) => carInfo.carInfoId)
    carInfo: CarInfo[] 
        
}
