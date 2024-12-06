import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";
import { CarTypeEnum } from "../sell.model";
import { PrimaryGeneratedColumn } from "typeorm";


export class CreateSettingDto {

    @PrimaryGeneratedColumn('uuid')
    settingId: string;
    
    @PrimaryGeneratedColumn('uuid')
    brandId: string;

    @PrimaryGeneratedColumn('uuid')
    carTypeId: string;

    @IsString({'message': 'brandName is be a string'})
    @IsOptional()
    brandName?: string;
    
    @IsOptional({'message': 'Model for using with CarType'})
    @IsString({'message': 'Model is be a string'})
    @IsEnum(CarTypeEnum,{'message': 'Model must be a valid CarTypeEnum value'})
    model?: CarTypeEnum;


    createdAt: Date;

    @IsOptional()
    updatedAt?: Date;
    @IsOptional()
    deletedAt?: Date;

        
}
