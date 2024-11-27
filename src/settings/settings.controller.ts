import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}
//brand type
  @Post('brand')
  async createBrand(@Body() createSettingDto: CreateSettingDto) {
    return await this.settingsService.createBrand(createSettingDto);
  }
  @Post('cartype')
  async createCarType(@Body() createSettingDto: CreateSettingDto) {
    return await this.settingsService.createCartype(createSettingDto);
  }
  // how to set apiname


  @Get()
  findAll() {
    return this.settingsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.settingsService.findOne(+id);
  }

  @Patch('cartype/:id')
  updateCartype(@Param('id') id: string, @Body() updateSettingDto: UpdateSettingDto) {
    return this.settingsService.updateCartype(id, updateSettingDto);
  }

  @Patch('brand/:id')
  updateBrand(@Param('id') id: string, @Body() updateSettingDto: UpdateSettingDto) {
    return this.settingsService.updateBrand(id, updateSettingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.settingsService.remove(+id);
  }
}
