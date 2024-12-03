import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";
import { CarTypeEnum } from "../sell.model";


export class CreateSettingDto {

    @IsString({'message': 'settingId is be a string'})
    @IsNotEmpty()
    settingId: string;
    
    @IsString({'message': 'brandId is be a string'})
    @IsNotEmpty()
    brandId: string;
  
    // @IsUUID()
    @IsNotEmpty()
    carTypeId: string;

    @IsString({'message': 'brandName is be a string'})
    @IsOptional()
    brandName: string;
    
    
    @IsString({'message': 'Model is be a string'})
    @IsEnum(CarTypeEnum,{'message': 'Model must be a valid CarTypeEnum value'})
    model: CarTypeEnum;


    createdAt: Date;

    @IsOptional()
    updatedAt?: Date;
    @IsOptional()
    deletedAt?: Date;

        
}
