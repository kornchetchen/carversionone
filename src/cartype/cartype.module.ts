import { Module } from '@nestjs/common';
import { CartypeService } from './cartype.service';
import { CartypeController } from './cartype.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarType } from './entities/cartype.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarType])],
  controllers: [CartypeController],
  providers: [CartypeService],
})
export class CartypeModule {}
