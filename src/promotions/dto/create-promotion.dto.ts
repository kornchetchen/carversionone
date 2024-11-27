import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class CreatePromotionDto {
    @PrimaryGeneratedColumn('uuid')
    carInfoId: string;
    @Column({'name': 'carInfoName'})
    carInfoName: string;
    @Column({'name': 'isActive'})
    isActive: boolean;
    @Column({'name': 'year'})
    @IsNumber()
    year: number;

    @Column({'name': 'price'})
    @IsNumber()
    price: number;

    @Column({'name': 'color'})
    @IsString()
    color: string;

    @Column({'name': 'isAWD'})
    @IsBoolean()
    isAWD: boolean;

    @Column({'name': 'carTypeId'})
    @IsString()
    carTypeId: string;

    @Column({'name': 'brandId'})
    @IsString()
    @IsNotEmpty()
    brandId: string;

   @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
    promotionIds: string[];
}
