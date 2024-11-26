import { IsString, IsBoolean, IsNumber, IsArray } from "class-validator";

export class CreateDTO {
  @IsString()
  name: string;

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
  carId: number;

  @IsNumber()
  cartypeId: number;

  @IsArray()
  @IsNumber({  })
  promotionIds: number[];
}