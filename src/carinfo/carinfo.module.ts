import { Module } from '@nestjs/common';
import { CarinfoService } from './carinfo.service';
import { CarinfoController } from './carinfo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarInfo } from './entities/carinfo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarInfo])],
  controllers: [CarinfoController],
  providers: [CarinfoService],
})
export class CarinfoModule {}
