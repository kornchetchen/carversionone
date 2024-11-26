import { IsString } from "class-validator";

export class CreateCartpeDTO {
  @IsString()
  model: string;
}