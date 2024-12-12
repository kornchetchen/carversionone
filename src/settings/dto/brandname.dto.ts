import { IsString } from "class-validator";

export class BrandnameSettingDto {
@IsString({ message: 'brandName is be a string' })
brandName: string;
}