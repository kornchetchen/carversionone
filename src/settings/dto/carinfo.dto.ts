import {
  IsBoolean,
  IsBooleanString,
  IsDate,
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
export class CarInfoDto {
  @IsString({ message: 'carInfoName is be a string' })
  carInfoName: string;

  @IsBooleanString({ message: 'isActive is be a boolean' })
  isActive: boolean;

  @IsNumber()
  year: number;

  @IsDecimal({ force_decimal: true, decimal_digits: '2' })
  @IsNotEmpty({ message: 'price is be a number required' })
  @Min(0, { message: 'price is be a number required' })
  price: number;

  @IsString({ message: 'color is be a string' })
  color: string;

  @IsBoolean()
  isAWD: boolean;

  @Type(() => Date)
  @IsDate()
  createdAt: Date;

  @IsString()
  brand: string;

  @IsString()
  promotion: string;

  // deletedAt: Date;
}

export class CarInfoUpdate  {
    
  @Type(() => Date)
  @IsDate()
  updatedAt: Date;

  @IsNumber()
   price: number;

}
