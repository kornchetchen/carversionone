import { Controller, Get, Post, Body, Patch, Param, Query, Delete, Inject} from '@nestjs/common';
import { SettingsService } from './settings.service';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { UUID } from 'crypto';
import { CarTypeEnum } from './sell.model';
import { CarType } from './entities/cartype.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Controller('settings') 
export class SettingsController {
  constructor(
    @Inject(SettingsService)
    private readonly settingsService: SettingsService) 
    {}

  @Post('brandcreate')
async createBrand(@Body() createSettingDto: CreateSettingDto) { 
    console.log(createSettingDto);
    return  await this.settingsService.createBrand(createSettingDto);
  }

@Post('modelcreate')
async createCarType(
  @Body() createSettingDto: CreateSettingDto) {
  console.log(createSettingDto)
  return await this.settingsService.createCartype(createSettingDto);
  }

//findone here 
@Get('cartypeseach/:id')
async getCarTypeInfo(
  @Param('id') carTypeId: string,
) {
  console.log(carTypeId);
  console.log("Funciton Checking .getCarType");
  return await this.settingsService.getCartypeById(carTypeId);
}


  @Get('brandid/:id')
 async  getBrands(
  @Param('id') brandId: string,
) {
    console.log(brandId);
    console.log("Funciton Checking ",this.getBrands);
    return await this.settingsService.getbrandpeById(brandId);

  }

@Get('cartypemodel/allmodel')
async getMoreInfo(
  @Query('model') model: CarTypeEnum,
) {
  console.log(model);
  console.log("Funciton Checking ", this.getMoreInfo);
  return await this.settingsService.getAllCarTypeDetailsByModel(model);
}

@Get('cartypemodel/:model')
async getCarModel(
  @Param('model') model: CarTypeEnum,
) {
  console.log(model);
  console.log("Funciton Checking ", this.getMoreInfo);
  return await this.settingsService.getAllCarTypeDetailsByModel(model);
}


@Get('brandss')
async searchBrand(
  @Query('brandId') brandId: string,
  // @Query('brandName') brandName: string,

) {
  console.log(brandId);
  // console.log(brandName); 
  console.log("Funciton Checking ",this.searchBrand);
  return await this.settingsService.getbrandpeById(brandId);
  
} 


//time date
@Get('brands/:time')
searchBrandTimeParseInt(
  @Query('createAt') createAt: string,
  @Query('updateAt') updateAt: string,
) {
  const createAtDate = new Date(createAt);
  const updateAtDate = new Date(updateAt);

  console.log(createAt);
  console.log(updateAt);
  console.log(createAtDate);
  console.log(updateAtDate);
  console.log("Funciton Checking ",this.searchBrandTimeParseInt);
  return {createAtDate, updateAtDate}
}


  @Get('byid/:id/:brand')
  async findOnebarndById(
    @Param('id') id: string,
    @Param('brand') brand: string
  )
      
  { 
    console.log(id);
    console.log(brand);
    console.log("string function ",this.findOnebarndById);
  }


  @Get('bycartype/:id/:cartype/:color') 
  async findOnecartype(
    @Param('id') id: string,
    @Param('cartype') cartype: CarTypeEnum,
    @Param('color') color:string)
    { 
    console.log(id);
    console.log(cartype);
    console.log(color);
    console.log("Car type you want ",this.findOnecartype);
  }

  @Get('brandtail/:brand/:model/:date/:price')
  async findWithBrandDetails(
    @Param('brand') brand: string,
    @Param('model') model: string,
    @Param('date') date: string,
    @Param('price') price: string
  )
   {
    // const createYearTime = new Date(Number(year), Number(month) , Number(day));
    const year = date.substring(0, 4);
    const month = date.substring(4, 6);
    const day = date.substring(6, 8);
    const createYearTime = new Date(Number(year), Number(month) - 1, Number(day));

    console.log(brand);
    console.log(model);
    console.log(createYearTime);
    console.log(year);
    console.log(month);
    console.log(day);
    console.log(price);
    console.log("Car Detail ", this.findWithBrandDetails);
   }

  @Get('brandinfo/:branddetail/:brandname')
  async findOnecartypebrandName(
    @Param('branddetail') branddetail: string,
    @Param('brandname') brandName: string
  ) { 
    console.log(branddetail);
    console.log(brandName);
    console.log("Funciton Checking ",this.findOnecartypebrandName);
  }

  @Get('carinfo/:cartyemd/:model')
  async findOnecartypemodel(
    @Param('model')   model: string) { 
    console.log(model);
    console.log("Funciton Checking ",this.findOnecartypemodel);
  }


  @Patch('cartypeiden/:cartypeid/:cartype')
  updateCartype(
    @Param('cartypeid') id: string,
    @Param('cartype') carTypeModel: string,
   @Body() updateSettingDto: UpdateSettingDto) {
      const a = {
        id : updateSettingDto.carTypeId,
        carTypeModel : updateSettingDto.model,
      }
    console.log(updateSettingDto);
    console.log(id);
    console.log(carTypeModel);
    console.log(a);
    console.log("Funciton Checking .updateCartype");
    // return {id,carTypeIds}
  } 



@Patch('cartypelineone/:id/:brandName')
async updateCarTypelineone(
  @Param('id') CarTypeId: string,
  @Param('brandName') brandName: string,
  @Body() updateSettingDto: UpdateSettingDto,
) {
  const updateDto = { 
    id: updateSettingDto.carTypeId,
    brandName: updateSettingDto.brandName };
    console.log(CarTypeId);
    console.log(brandName);
  console.log(updateDto);
  console.log('.updateCarTypelineone')
}



@Patch('cartypelineoness/:id/:model')
 udpateCarTypeoneModel ( 
  @Param('id') id:string,
  @Param('model') model:CarTypeEnum,
  @Body() updateSettingDto:UpdateSettingDto,
){
  // const {model} = updateSettingDto;
  const updateDto = { ...updateSettingDto,model: updateSettingDto.model };
  console.log(id);
  console.log(model);
  console.log(updateDto);
  console.log('.udpateCarTypeoneModel')
}












@Patch('cartypelinetwo/:id/:model')
async updateCarTypelinetwo(
  @Param('id') CarTypeId: string,
  @Param('model') model: CarTypeEnum,
  @Body() updateSettingDto: UpdateSettingDto,
) {
  const updateDto = { model: updateSettingDto.model };
  console.log(CarTypeId);
  console.log(model);
    console.log(updateDto);
  console.log('.updateCarTypelineone')

}


@Patch('brandqriden/:brandId/:createdat/:updatedat') 
async updateBrandDates (
  @Param('brandId') brandId: string,
  @Param('createdat') createdAtparam: string,
  @Param('updatedat') updatedAtparam: string,
  @Body() updateSettingDto: UpdateSettingDto,
) {
  const dtoUpdateBrandDates =  {createdAtparam: updateSettingDto.createdAt,updatedAtparam: updateSettingDto.updatedAt}; 
  console.log(brandId)
  console.log(createdAtparam)
  console.log(updatedAtparam)
  console.log(dtoUpdateBrandDates);
  console.log( updateSettingDto.createdAt)
  console.log( updateSettingDto.updatedAt)
  
  console.log("Funciton Checking .updateBrandDates");
  return  {dtoUpdateBrandDates};

} 


//#################with out param#########################


@Patch('withourparams')
async updateCartypeWithoutParam(
  @Query('cartypeId') cartypeId: string,
 @Body() updateSettingDto: UpdateSettingDto) {
console.log(cartypeId);
console.log(updateSettingDto);
console.log('.updateCartypeWithoutParam')
return  {
  cartypeId
}
}


@Patch('brandwithourparam')
updateBrandWithoutParams(
  @Query('brandId') brandId: string,
  @Query('brandName') brandName: string,  
  @Query('version') version: string,
 @Body() updateSettingDto: UpdateSettingDto) {
console.log(updateSettingDto);
console.log('.updateCartypeWithoutParams')
return  {
  brandId,
  brandName,
  version
}
}

//##################done with out param #####################


//parma private static //quer for using on public 


  @Delete('delparam/:cartype/:color')
 harddeleteCartype(
  @Param('cartype') cartype: string,
  @Param('color') color: UpdateSettingDto
) {
  console.log(cartype);
  console.log(color);
  console.log("Funciton Checking ",this.harddeleteCartype);
  return {cartype,color}
}


  @Delete('/delparam/:cartypeid')
 hardDelparamId(
    @Param('cartypeid') cartypeid: string) 
  {
    console.log(cartypeid);
    console.log("Funciton Checking ",this.hardDelparamId);
    return {cartypeid}
  }
  
  
  @Delete('delpram/:brandname')
  hardDelePrams(
    @Param('brandname') brandname: string,
    @Query('brandId') id: string
  )
  {
    console.log(brandname);
    console.log(id);
    console.log("Funciton Checking ",this.hardDelePrams);
    return {brandname,id}
   }
   //second case
    @Delete('delprams/:brandId')
    hardDelePramsQuery(
      @Param('brandId') brandId: string,
      @Query('brandname') brandname:string
    ) {
      console.log(brandId);
      console.log(brandname);
      console.log("Funciton Checking ", this.hardDelePrams);
      return {brandId,brandname}
    }
    
}