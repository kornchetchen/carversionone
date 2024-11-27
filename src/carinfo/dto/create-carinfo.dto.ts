import { IsString, IsBoolean, IsNumber, IsArray } from "class-validator";

export class CreateCarinfoDTO {
  @IsNumber()
  carId: number;

  @IsString()
  carInfoName:string;

  @IsString()
  carName: string;

  @IsBoolean()
  isActive: boolean;

  @IsNumber()
  year: number;

  @IsNumber()
  price: number;

  @IsString()
  color: string;

  @IsBoolean()
  isAWD: boolean;

  @IsNumber()
  cartypeId: number;

  @IsArray()
  @IsNumber({  })
  promotionId: number[];
}