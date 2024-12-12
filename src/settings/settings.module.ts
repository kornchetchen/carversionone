import { Module } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { SettingsController } from './settings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Brand } from './entities/brand.entity';
import { CarType } from './entities/cartype.entity';
import { CarInfo } from 'src/promotions/entities/carinfo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Brand,CarType,CarInfo])],
  controllers: [SettingsController],
  exports: [SettingsService],
  providers: [SettingsService],
})
export class SettingsModule {}