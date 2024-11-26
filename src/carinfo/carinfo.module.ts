import { Module } from '@nestjs/common';
import { CarinfoService } from './carinfo.service';
import { CarinfoController } from './carinfo.controller';

@Module({
  controllers: [CarinfoController],
  providers: [CarinfoService],
})
export class CarinfoModule {}
