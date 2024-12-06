import { Module } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { SettingsController } from './settings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateSettingDto } from './dto/create-setting.dto';
import { Brand } from './entities/brand.entity';
import { CarType } from './entities/cartype.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CreateSettingDto,Brand,CarType,SettingsService])],
  controllers: [SettingsController],
  exports: [SettingsService],
  providers: [SettingsService],
})
export class SettingsModule {}