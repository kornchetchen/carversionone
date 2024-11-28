import { IsNumber, IsString, IsDate } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class CreateSellhistoryDto {
  @IsNumber()
  price: number;

  @IsString()
  name: string;

  @IsDate()
  @IsString()
  startPromotion: Date;

  @IsDate()
  @IsString()
  endPromotion: Date;

  @IsString()
  model: string;

  @IsString()
  brand: string;

  @IsString()
  color: string;

  @IsNumber()
  year: number;
}