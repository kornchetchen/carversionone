import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { CarInfo } from "src/promotions/entities/carinfo.entity";
import { Column, CreateDateColumn, DeleteDateColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CarTypeEnum } from "../sell.model";


export class CreateSettingDto {

    @IsString()
    @IsNotEmpty()
    settingId: string;
    
    @IsString()
    @IsNotEmpty()
    brandId: string;
  
    @IsString()
    @IsNotEmpty()
    brandName: string;
    
    @IsString()
    @IsNotEmpty()
    carTypeId: string;
  
  
    @IsString()
    // @IsEnum(CarTypeEnum)
    model: string;


    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;

        
}
