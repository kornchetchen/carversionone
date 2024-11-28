import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, Req, Inject, HttpCode, Redirect, HostParam, Query, NotFoundException } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from './entities/brand.entity';
import { CarType } from './entities/cartype.entity';

@Controller('settings') //checking code from here
export class SettingsController {
  constructor(
    // @InjectRepository(CarType)
    // private cartypeRepository: Repository<CarType>,

    // @InjectRepository(Brand)
    // private brandRepository: Repository<Brand>,

    private readonly settingsService: SettingsService) 
    {}


//brand type
  @Post('brand')
  // @HttpCode(201)
  @HttpCode(204)
  async createBrand(@Body() createSettingDto: CreateSettingDto) { //
    return await this.settingsService.createBrand(createSettingDto);
  }

  
    @Post('brand')
    @HttpCode(204)
    async createBrand204(@HostParam('cartype') cartype: string, @Body() createSettingDto: CreateSettingDto) {
      return await this.settingsService.createBrand(createSettingDto);
    }
    
  @Post('cartype')
  // @HttpCode(201)
  @HttpCode(204)
  async createCarType(@Body() createSettingDto: CreateSettingDto) {
    return await this.settingsService.createCartype(createSettingDto);
  }

  @Get('cartype')
  @Redirect('http://localhost:3000/settings', 302)
  getcartype(@Query('cartype') cartype: string) {
    return { cartype };
  }

  @Get('brand')
  @Redirect('http://localhost:3000/settings', 302)
  getbrand(@Query('brand') brand: string) {
    return { brand };
  }

  
@Get('settings')
searchBrand(
  @Query('brand') brand: string,
  @Query('cartype') cartype: string,
): string {
  return `Brand: ${brand}, Cartype: ${cartype}`;
}

  @Get(':brand/:id')
  async findOnebarnd(@Param('id') id: string) { 
    const barndid = await this.settingsService.findOne(+id);
    if (barndid === null) {
      throw new NotFoundException(`Barnd with id ${id} not found`);
    }
    return barndid;
  }


  @Get(':cartype/:id')
  async findOnecartype(@Param('id') id: string) { 
    const carTypeId = await this.settingsService.findOne(+id);
    if (carTypeId === null) {
      throw new NotFoundException(`Cartype with id ${id} not found`);
    }
  }

  @Get(':brand/:brandname')
  async findOnecartypebrandName(@Param('brandName') brandName: string) { 
    const carTypeId = await this.settingsService.findOne(+brandName);
    if (carTypeId === null) {
      throw new NotFoundException(`Cartype with id ${brandName} not found`);
    }
  }
  
  @Get(':cartype/:model')
  async findOnecartypemodel(@Param('  model')   model: string) { 
    const carTypeId = await this.settingsService.findOne(+  model);
    if (carTypeId === null) {
      throw new NotFoundException(`Cartype with id ${  model} not found`);
    }
  }





  @Patch('cartype/:id')
  @Redirect('http://localhost:3000/settings', 302)
  updateCartype(@Param('id') id: string,
   @Body() updateSettingDto: UpdateSettingDto) {
    return this.settingsService.updateCartype(id, updateSettingDto);
  }

  

  @Patch('brand/:id')
  @Redirect('http://localhost:3000/settings', 302)
  updateBrand(@Param('id') id: string, @Body() updateSettingDto: UpdateSettingDto) {
    return this.settingsService.updateBrand(id, updateSettingDto);
  }

  @Delete(':id')
  @Redirect('http://localhost:3000/settings', 302)
  remove(@Param('id') id: string) {
    return this.settingsService.remove(+id);
  }
}
