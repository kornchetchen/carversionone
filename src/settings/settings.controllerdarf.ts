// import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, Req, Inject, HttpCode, Redirect, HostParam, Query, NotFoundException, Next, UseGuards } from '@nestjs/common';
// import { SettingsService } from './settings.service';
// import { CreateSettingDto } from './dto/create-setting.dto';
// import { UpdateSettingDto } from './dto/update-setting.dto';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Brand } from './entities/brand.entity';
// import { CarType } from './entities/cartype.entity';
// import { Transform } from 'class-transformer';
// // @UseGuards(AuthGuard('jwt'))
// @Controller('settings') //checking code from here
// export class SettingsController {
//   constructor(
//     // @InjectRepository(CarType)
//     // private cartypeRepository: Repository<CarType>,

//     // @InjectRepository(Brand)
//     // private brandRepository: Repository<Brand>,

//     private readonly settingsService: SettingsService) 
//     {}


// //brand type
//   @Post('brand')
//   async createBrand(@Body() createSettingDto: CreateSettingDto) { //
//     console.log(createSettingDto);
//     return  {
//       message: createSettingDto
//     }
//     // return await this.settingsService.createBrand(createSettingDto);
//   }
    
//   @Post('cartype')
//   // @UseGuards(AuthGuard)
//   async createCarType(@Body() createSettingDto: CreateSettingDto) {
//     console.log(createSettingDto)
//     return  {
//       message: createSettingDto
//     }
//     // return await this.settingsService.createCartype(createSettingDto);
//   }

//   @Get('cartype')
//   getcartype(@Query('cartype') cartype: string) {
//     console.log(cartype);
//     return cartype ;
//   }

//   @Get('brand')
//   getbrand(@Query('brand') brand: string) {
//     console.log(brand);
//     return brand ;
//   }

  
// @Get('settings') 
// searchSettings(
//   @Query('brandname') brandName: string,
//   @Query('cartype') cartype: string,
// ): string {
//   console.log(cartype);
//   console.log(brandName);
//   return`Brand: ${brandName}, Cartype: ${cartype}`;
// }

// @Get('brand')
// searchBrand(
//   @Query('brandId') brandId: string,
//   @Query('brandName') brandName: string,

// ) {
//   console.log(brandId);
//   console.log(brandName);
// }



// @Get('brand')
// searchBrandTimeParseInt(
//   @Query('createAt') createAtParam: string,
//   @Query('updateAt') updateAtParam: string,
// ) {
//   console.log(createAtParam);
//   console.log(updateAtParam);
// }

// // {
// //   const brandCreateAt = new Date(parseInt(createAtParam));
// //   const brandUpdateAt = new Date(parseInt(updateAtParam));

// //   if (isNaN(brandCreateAt.getTime()) || isNaN(brandUpdateAt.getTime())) {
// //     throw new NotFoundException(`Invalid date ${brandCreateAt} or ${brandUpdateAt} format `);
// //   }
// //   return {
// //     createAt: {
// //       year:brandCreateAt.getFullYear(),
// //       month:brandCreateAt.getMonth(),
// //       day:brandCreateAt.getDate(),
// //     },
// //     updateAt: {
// //       year:brandUpdateAt.getFullYear(),
// //       month:brandUpdateAt.getMonth(),
// //       day:brandUpdateAt.getDate(),
// //     },
// //   };
// // }

// // @Get('brand')
// // searchBrandTimeTransform(
// //   @QueryQuery('createAt')
// //   @Transform(({ value }) => {
// //     const date = new Date(value);
// //     if (isNaN(date.getTime())) {
// //       throw new NotFoundException(`Invalid date ${value} format `);
// //     }
// //     return date;
// //   })
// //   createAt: Date,

// //   @Query('updateAt')
// //   @Transform(({ value }) => {
// //     const date = new Date(value);
// //     if (isNaN(date.getTime())) {
// //       throw new NotFoundException(`Invalid date ${value} format `);
// //     }
// //     return date;
// //   })

  
// // )

//   @Get(':brand/:id')
//   async findOnebarndById(@Param('id') id: string) { 
//     // const barndid = await this.settingsService.findOne(+id);
//     // if (barndid === null) {
//     //   throw new NotFoundException(`Barnd with id ${id} not found`);
//     // }
//     // return barndid;
//     console.log(id);
//   }


//   @Get(':cartype/:id')
//   async findOnecartype(@Param('id') id: string) { 
//     // const carTypeId = await this.settingsService.findOne(+id);
//     // if (carTypeId === null) {
//     //   throw new NotFoundException(`Cartype with id ${id} not found`);
//     // }
//     console.log(id);
//   }



//   @Get(':brand/:brandname')
//   async findOnecartypebrandName(@Param('brandName') brandName: string) { 
//     // const carTypeId = await this.settingsService.findOne(+brandName);
//     // if (carTypeId === null) {
//     //   throw new NotFoundException(`Cartype with id ${brandName} not found`);
//     // }
//     console.log(brandName);
//   }
  
//   @Get(':cartype/:model')
//   async findOnecartypemodel(@Param('  model')   model: string) { 
//     // const carTypeId = await this.settingsService.findOne(+  model);
//     // if (carTypeId === null) {
//     //   throw new NotFoundException(`Cartype with id ${  model} not found`);
//     // }
//     console.log(model);
//   }
// //uuid
//   @Patch('cartype/:id')
//   updateCartype(@Param('id') id: UpdateSettingDto,
//    @Body() updateSettingDto: UpdateSettingDto) {
//     // return this.settingsService.updateCartype(id, updateSettingDto);
//     console.log(updateSettingDto);
//   }

//   @Patch('brand/:id')
//   updateBrand(@Param('id') id: string, @Body() updateSettingDto: UpdateSettingDto) {
//     // return this.settingsService.updateBrand(id, updateSettingDto);
//     console.log(updateSettingDto);
//   }

//   @Patch('brand/:id')
//   async updateBrandDates (
//     @Param('id') id: string,
//     @Body() updateSettingDto: UpdateSettingDto,
//     @Query('createAt') createAtParam: UpdateSettingDto,
//     @Query('updateAt') updateAtParam: UpdateSettingDto,
//   ) {
//     console.log(createAtParam);
//     console.log(updateAtParam);
// //parma private static //quer for using on public 
//     // const brandCreateAt = new Date(parseInt(createAtParam));
//     // const brandUpdateAt = new Date(parseInt(updateAtParam));
//     // if (isNaN(brandCreateAt.getTime()) || isNaN(brandUpdateAt.getTime())) {
//     //   throw new NotFoundException(`Invalid date ${brandCreateAt} or ${brandUpdateAt} format `);
//     // }
//     // updateSettingDto.createdAt = brandCreateAt;
//     // updateSettingDto.updatedAt = brandUpdateAt;
    
//     // return this.settingsService.updateBrand(id, updateSettingDto);
//   }



//   @Delete(':id')
//   remove(@Param('id') id: UpdateSettingDto) {
//     console.log(id);
//     // return this.settingsService.remove(+id);
//   }
// }
