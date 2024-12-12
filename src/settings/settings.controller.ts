import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Delete,
  Inject,
  Patch,
} from '@nestjs/common';
import { SettingsService } from './settings.service';
import { CarTypeEnum } from './sell.model';

import { CarInfo } from 'src/promotions/entities/carinfo.entity';
import { BrandnameSettingDto } from './dto/brandname.dto';
import { CarTypeDto, CarTypeUpdate } from './dto/cartype.dto';
import { CarInfoUpdate } from './dto/carinfo.dto';
@Controller('settings')
export class SettingsController {
  constructor(
    @Inject(SettingsService)
    private readonly settingsService: SettingsService,
  ) {}

  @Post('cartypemodelcreate')
  async CrateCarType(
    @Body() CarTypeDto: CarTypeDto,
    brandnameSettingDto: BrandnameSettingDto,
  ) {
    console.log('.CrateCarType');
    return await this.settingsService.createCarType(CarTypeDto);
  }

  @Get('getallcarInfo')
  async getAllCarTypeInfo(@Query('Info') CarInfo: CarInfo) {
    return await this.settingsService.getAllCarInfo(CarInfo);
  }

  @Get('getallcartypemodel')
  async getAllCartypeModel(@Query('all') model: CarTypeEnum) {
    return await this.settingsService.getAllCarTypeDetailsByModel(model);
  }
  @Get('getcreatecatype/:id')
  async getCarType(@Param('id') carTypeId: string) {
    console.log('Function Checking .getCarTypeinfo');
    return await this.settingsService.getCartypeById(carTypeId);
  }

  @Get('getcarinfo/:id')
  async getCarinfo(@Param('id') carInfoId: string) {
    console.log('Function Checking .getCarTypeinfo');
    return await this.settingsService.getCarInfoById(carInfoId);
  }

  @Get('getcartypemodel/:model')
  async getcartypemodel(@Param('model') model: CarTypeEnum) {
    console.log('Funciton Checking .getAllCartype');
    return await this.settingsService.getCarTypemodelwithparam(model);
  }

  @Get('getcarinfoname/:name')
  async getCarInfoName(@Param('name') carInfoName: string) {
    console.log('Funciton Checking .getAllCartype');
    return await this.settingsService.getCarInfoNamewithparam(carInfoName);
  }

  @Patch('withourparams/:cartypeId')
  async updateCartypeWithoutParam(
    @Param('cartypeId') cartypeId: string,
    @Query('model') model: CarTypeEnum,
    @Body() carTypeUpdate: CarTypeUpdate,
  ) {
    return await this.settingsService.updateCarTypeStauts(cartypeId, model);
  }

  @Patch('cartypemodelUpdates/:id/model')
  async updateCarTypeIdModel(
    @Param('id') CarTypeId: string,
    @Body() carTypeUpdate: CarTypeUpdate,
  ) {
    const model = await carTypeUpdate.model;
    return await this.settingsService.updateCarTypeStatusss(CarTypeId, model);
  }

  @Patch('carinfowtparam/:id/price')
  async updateCarInfoWithoutParam(
    @Param('id') carInfoId: string,
    @Body() carInfoUpdate: CarInfoUpdate,
  ) {
    const price = await carInfoUpdate.price;
    return await this.settingsService.updateCarInfoPrice(carInfoId, price);
    };
  

  @Delete('delcartype/:id')
  async deleteCartype(@Param('id') cartypeId: string) {
    return await this.settingsService.deleteCartype(cartypeId);
  }

  @Delete('delcarinfo/:id')
  async deleteCarInfo(@Param('id') carInfoId: string) {
    return await this.settingsService.deleteCarInfo(carInfoId);
  }


@Delete('softdelete/:id')
async softDelete(@Param('id') carTypeId: string) {
  return await this.settingsService.SoftDeleteCarType(carTypeId);
}
}
// @Post('modelcreate')
// async createCarType(
//   @Body() CarTypeDto: CarTypeDto) {
//   console.log(CarTypeDto)
//   return await this.settingsService.createCartype(CarTypeDto);
//   }

// @Get('cartypeseach/:id')
// async getCarTypeInfo(
//   @Param('id') carTypeId: string,
// ) {
//   console.log(carTypeId);
//   console.log("Funciton Checking .getCarType");
//   return await this.settingsService.getCartypeById(carTypeId);
// }

//   @Get('brandid/:id')
//  async  getBrands(
//   @Param('id') brandId: string,
// ) {
//     console.log(brandId);
//     console.log("Funciton Checking ",this.getBrands);
//     return await this.settingsService.getbrandpeById(brandId);

//   }

// @Get('cartypemodel/allmodel')
// async getMoreInfo(
//   @Query('model') model: CarTypeEnum,
// ) {
//   console.log(model);
//   console.log("Funciton Checking ", this.getMoreInfo);
//   return await this.settingsService.getAllCarTypeDetailsByModel(model);
// }

// @Get('cartypemodel/:model')
// async getCarModel(
//   @Param('model') model: CarTypeEnum,
// ) {
//   console.log(model);
//   console.log("Funciton Checking ", this.getMoreInfo);
//   return await this.settingsService.getAllCarTypeDetailsByModel(model);
// }

// @Get('brandnameall/alldetail')
// async getAllBrandInfo (
//   @Query('alldetail')brandName:string,
// )
//   {
//     console.log('brand')
//     console.log(brandName)
//     console.log('.getAllbrand')
//     return await this.settingsService.getAllBrandInfo(brandName);
//   }

//   @Get('brandnamesearch/:brandName')
//   async getSerchBybrandName (
//     @Param('brandName')brandName:string,
//   ) {
//     console.log('brandName')
//     console.log(brandName)
//     console.log('.getAllbrand')
//     return await this.settingsService.getAllBrandInfo(brandName);
//   }

// //ading service with using cartype and color param

//   @Get('brandtail/:brand/:model/:date/:price')
//   async findWithBrandDetails(
//     @Param('brand') brand: string,
//     @Param('model') model: string,
//     @Param('date') date: string,
//     @Param('price') price: string
//   )
//    {
//     // const createYearTime = new Date(Number(year), Number(month) , Number(day));
//     const year = date.substring(0, 4);
//     const month = date.substring(4, 6);
//     const day = date.substring(6, 8);
//     const createYearTime = new Date(Number(year), Number(month) - 1, Number(day));

//     console.log(brand);
//     console.log(model);
//     console.log(createYearTime);
//     console.log(year);
//     console.log(month);
//     console.log(day);
//     console.log(price);
//     console.log("Car Detail ", this.findWithBrandDetails);
//    }

//   @Get('brandinfo/:branddetail/:brandname')
//   async findOnecartypebrandName(
//     @Param('branddetail') branddetail: string,
//     @Param('brandname') brandName: string
//   ) {
//     console.log(branddetail);
//     console.log(brandName);
//     console.log("Funciton Checking ",this.findOnecartypebrandName);
//   }

//   @Get('carinfo/:cartyemd/:model')
//   async findOnecartypemodel(
//     @Param('model')   model: string) {
//     console.log(model);
//     console.log("Funciton Checking ",this.findOnecartypemodel);
//   }

//   @Patch('cartypeiden/:cartypeid/:cartype')
//   updateCartype(
//     @Param('cartypeid') id: string,
//     @Param('cartype') carTypeModel: string,
//    @Body() CarTypeUpdate: CarTypeUpdate) {
//       const a = {
//         id : CarTypeUpdate.carTypeId,
//         carTypeModel : CarTypeUpdate.model,
//       }
//     console.log(CarTypeUpdate);
//     console.log(id);
//     console.log(carTypeModel);
//     console.log(a);
//     console.log("Funciton Checking .updateCartype");
//     // return {id,carTypeIds}
//   }

// @Patch('cartypelineone/:id/:brandName')
// async updateCarTypelineone(
//   @Param('id') CarTypeId: string,
//   @Param('brandName') brandName: string,
//   @Body() CarTypeUpdate: CarTypeUpdate,
// ) {
//   const updateDto = {
//     id: CarTypeUpdate.carTypeId,
//     brandName: CarTypeUpdate.brandName };
//     console.log(CarTypeId);
//     console.log(brandName);
//   console.log(updateDto);
//   console.log('.updateCarTypelineone')
// }

// @Patch('cartypelineoness/:id/:model')
//  udpateCarTypeoneModel (
//   @Param('id') id:string,
//   @Param('model') model:CarTypeEnum,
//   @Body() CarTypeUpdate:CarTypeUpdate,
// ){
//   // const {model} = CarTypeUpdate;
//   const updateDto = { ...CarTypeUpdate,model: CarTypeUpdate.model };
//   console.log(id);
//   console.log(model);
//   console.log(updateDto);
//   console.log('.udpateCarTypeoneModel')
// }

// @Patch('brandqriden/:brandId/:createdat/:updatedat')
// async updateBrandDates (
//   @Param('brandId') brandId: string,
//   @Param('createdat') createdAtparam: string,
//   @Param('updatedat') updatedAtparam: string,
//   @Body() CarTypeUpdate: CarTypeUpdate,
// ) {
//   const dtoUpdateBrandDates =  {createdAtparam: CarTypeUpdate.createdAt,updatedAtparam: CarTypeUpdate.updatedAt};
//   console.log(brandId)
//   console.log(createdAtparam)
//   console.log(updatedAtparam)
//   console.log(dtoUpdateBrandDates);
//   console.log( CarTypeUpdate.createdAt)
//   console.log( CarTypeUpdate.updatedAt)

//   console.log("Funciton Checking .updateBrandDates");
//   return  {dtoUpdateBrandDates};

// }

// //#################with out param#########################

// @Patch('brandwithourparam')
// updateBrandWithoutParams(
//   @Query('brandId') brandId: string,
//   @Query('brandName') brandName: string,
//   @Query('version') version: string,
//  @Body() CarTypeUpdate: CarTypeUpdate) {
// console.log(CarTypeUpdate);
// console.log('.updateCartypeWithoutParams')
// return  {
//   brandId,
//   brandName,
//   version
// }
// }

// //##################done with out param #####################

// //parma private static //quer for using on public

//   @Delete('delparam/:cartype/:color')
//  harddeleteCartype(
//   @Param('cartype') cartype: string,
//   @Param('color') color: CarTypeUpdate
// ) {
//   console.log(cartype);
//   console.log(color);
//   console.log("Funciton Checking ",this.harddeleteCartype);
//   return {cartype,color}
// }

//   @Delete('/delparam/:cartypeid')
//  hardDelparamId(
//     @Param('cartypeid') cartypeid: string)
//   {
//     console.log(cartypeid);
//     console.log("Funciton Checking ",this.hardDelparamId);
//     return {cartypeid}
//   }

//   @Delete('delpram/:brandname')
//   hardDelePrams(
//     @Param('brandname') brandname: string,
//     @Query('brandId') id: string
//   )
//   {
//     console.log(brandname);
//     console.log(id);
//     console.log("Funciton Checking ",this.hardDelePrams);
//     return {brandname,id}
//    }
//    //second case

//     @Delete('delprams/:brandId')
//     hardDelePramsQuery(
//       @Param('brandId') brandId: string,
//       @Query('brandname') brandname:string
//     ) {
//       console.log(brandId);
//       console.log(brandname);
//       console.log("Funciton Checking ", this.hardDelePrams);
//       return {brandId,brandname}
//     }
