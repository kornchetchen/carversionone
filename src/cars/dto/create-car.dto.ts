import { Type } from "class-transformer";
import { IsArray, IsString } from "class-validator";
import { CarInfo } from "src/carinfo/entities/carinfo.entity";

export class CreateCarDTO {
  @IsString()
  name: string;

  @IsArray()
  @Type(() => CarInfo)
  carInfo: CarInfo[];
}