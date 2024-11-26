import { IsString, IsEnum, IsDate, IsArray } from "class-validator";
import { TypeDiscount } from "src/promotion/entities/promotion.entity";

export class CreatePromotionDTO {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsEnum(TypeDiscount)
  discountType: TypeDiscount;

  @IsDate()
  startPromotion: Date;

  @IsDate()
  endPromotion: Date;

  @IsArray()
  @IsString({ each: true })
  carInfoIds: string[];
}