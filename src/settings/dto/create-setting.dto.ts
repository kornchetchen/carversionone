import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { CarTypeEnum } from "../sell.model";


export class CreateSettingDto {

    // @IsString()
    // // @IsNotEmpty()
    // settingId: string;
    
    // @IsString()
    // // @IsNotEmpty()
    // brandId: string;
  
    @IsString()
    @IsNotEmpty()
    brandName: string;
    
    // @IsString()
    // // @IsNotEmpty()
    // carTypeId: string;
  
    
    @IsString({'message': 'Model is be a string'})
    @IsEnum(CarTypeEnum,{'message': 'Model must be a valid CarTypeEnum value'})
    model: string;


    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;

        
}
