import { PartialType } from "@nestjs/mapped-types";
import { IsString, IsEnum, IsNotEmpty, IsDate, MinDate } from "class-validator";
import { CarTypeEnum } from "../sell.model";
import { Type } from "class-transformer";
import { DeleteDateColumn } from "typeorm";


export class CarTypeDto {


  @IsString({ message: 'Model is be a string' })
  @IsNotEmpty({ message: 'Model is required' })
  @IsEnum(CarTypeEnum, { message: 'Model must be a valid CarTypeEnum value' })
  model: CarTypeEnum;

  @Type(() => Date)
  @IsNotEmpty()
  @MinDate(new Date())
  createdAt: Date;
}

export class CarTypeUpdate   {

    @IsEnum(CarTypeEnum,{'message': 'Model must be a valid CarTypeEnum value'})
    @IsNotEmpty({'message': 'Model is required'})
    model: CarTypeEnum;

    @Type(() => Date)
    @IsNotEmpty()
    updatedAt: Date;

}


export class deleteCarDto {
      
  @DeleteDateColumn()
  deletedAt: Date;
  
}