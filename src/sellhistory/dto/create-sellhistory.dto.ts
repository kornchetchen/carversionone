import { IsNumber, IsString, IsDate } from "class-validator";

export class CreateSellhistoryDto {
  @IsNumber()
  price: number;

  @IsString()
  name: string;

  @IsDate()
  startPromotion: Date;

  @IsDate()
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