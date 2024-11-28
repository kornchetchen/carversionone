import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes } from '@nestjs/common';
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
  @UsePipes()
  async createCarType(@Body() createSettingDto: CreateSettingDto) {
    return await this.settingsService.createCartype(createSettingDto);
  }

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
