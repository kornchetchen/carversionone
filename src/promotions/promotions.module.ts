import { Module } from '@nestjs/common';
import { PromotionsService } from './promotions.service';
import { PromotionsController } from './promotions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarInfo } from './entities/carinfo.entity';
import { Promotion } from './entities/promotion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarInfo,Promotion])],
  controllers: [PromotionsController],
  providers: [PromotionsService],
})
export class PromotionsModule {}
