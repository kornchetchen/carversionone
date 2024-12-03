import { Controller, Get, Post, Body, Patch, Param, Query, Delete} from '@nestjs/common';
import { SettingsService } from './settings.service';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { UUID } from 'crypto';
import { Brand } from './entities/brand.entity';
@Controller('settings') 
export class SettingsController {
  constructor(
    private readonly settingsService: SettingsService) 
    {}

  @Post('brand')

async createBrand(@Body() createSettingDto: CreateSettingDto) { 
    const brandsample = {
      brandName: 'brandName',
      brandId: 1
    }
    console.log(createSettingDto);
    return  await {
      message: createSettingDto
    }
  }

    
  @Post('cartype')
  async createCarType(@Body() createSettingDto: CreateSettingDto) {
    console.log(createSettingDto)
    const cartypesample = {
      cartype: 'cartype',
      cartypeId: 1
    }
    return  {
      message: createSettingDto
    }
  }


  @Get('cartype')
 async getcartype(
  @Query('cartypeId') cartypeId: string,
  @Query('model') model:string,
  @Query('createdAt') create_at:Date,
  @Query('updateAt') update_at: Date,
  @Query('deletedBy') deleted_by: string

) {

  console.log(cartypeId);
  console.log(model);
  console.log(create_at);
  console.log(update_at);
  console.log(deleted_by);
  }



  @Get('brand')
 async  getBrands(
  @Query('brandId') brandId: string,
  @Query('brandName') brandName: string,
  @Query('createdAt') createdAt:string,
  @Query('updateAt') updateAt: string,
  @Query('deletedBy') deletedBy: string

) {
    console.log(brandId);
    console.log(brandName);
    console.log(createdAt);
    console.log(updateAt);
    console.log(deletedBy);

    return {brandId, brandName, createdAt, updateAt, deletedBy}

  }




  
@Get('moreinfo') 
getMoreInfo(
  @Query('carInfoName') carInfo_name: string,
  @Query('isActive') isActive: string,
  @Query('year') year: string,
  @Query('price') price: string,
  @Query('color') cartype: string,
  @Query('awd') awd: string,
  @Query('car_id') car_id: UUID,
  @Query('cartypeId') cartype_id: UUID,


) {
  console.log(carInfo_name);
  console.log(isActive);
  console.log(year);
  console.log(price);
  console.log(cartype);
  console.log(awd);
  console.log(car_id);
  console.log(cartype_id);

  return {
    carInfo_name,
    isActive,
    year,
    price,
    cartype,
    awd,
    car_id,
    cartype_id
  }

}




@Get('brandss')
async searchBrand(
  @Query('brandId') brandId: string,
  @Query('brandName') brandName: string,

) {
  console.log(brandId);
  console.log(brandName); 
  return  {brandId,brandName}
} 



@Get('brands/:time')
searchBrandTimeParseInt(
  @Query('createAt') createAt: string,
  @Query('updateAt') updateAt: string,
) {
  console.log(createAt);
  console.log(updateAt);
  return {createAt, updateAt}
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
  //**///path first => param
  async findOnecartype(
    @Param('id') id: string,
    @Param('cartype') cartype: string,
    @Param('color') color:string)

    { 
    console.log(id);
    console.log(cartype);
    console.log(color);
    console.log("Car type you want ",this.findOnecartype);
  }

  @Get('brandtail/:brand/:model/:year/:price')
  async findWithBrandDetails(
    @Param('brand') brand: string,
    @Param('model') model: string,
    @Param('year') year: string,
    @Param('price') price: string
  )
   {
    console.log(brand);
    console.log(model);
    console.log(year);
    console.log(price);
    console.log("Car Detail ",this.findWithBrandDetails);
   }

  @Get(':branddetail/:brandname')
  async findOnecartypebrandName(@Param('brandname') brandName: string) { 
    console.log(brandName);
    console.log("Funciton Checking ",this.findOnecartypebrandName);
  }

  @Get(':cartyemd/:model')
  async findOnecartypemodel(@Param('model')   model: string) { 
    console.log(model);
  }
  @Patch('cartypeiden/:id')
  updateCartype(@Param('id') id: UpdateSettingDto,
   @Body() updateSettingDto: UpdateSettingDto) {
    console.log(updateSettingDto);
  }


  @Patch('brandiden/:id') 
  updateBrand(@Param('id') id: string, @Body() updateSettingDto: UpdateSettingDto) {
    console.log(updateSettingDto);
  }

  @Patch('brandqriden/:id/:createat/:updateat') 
  async updateBrandDates (
    @Param('id') id: string,
    // @Body() updateSettingDto: UpdateSettingDto,
    @Param('createat') createat: string,
    @Param('updateat') updateat: string,
  ) {
    console.log(id);
    console.log(createat);
    console.log(updateat);
    console.log("Funciton Checking ",this.updateBrandDates);
//parma private static //quer for using on public 

  }

  @Delete('delparam/:cartype/:color')
 harddeleteCartype(
  @Param('cartype') cartype: string,
  @Param('color') color: UpdateSettingDto
) {
  console.log(cartype);
  console.log(color);
  console.log("Funciton Checking ",this.harddeleteCartype);
}


  @Delete('/delparam/:cartypeid')
 hardDelparamId(
    @Param('cartypeid') cartypeid: string) 
  {
    console.log(cartypeid);
    console.log("Funciton Checking ",this.hardDelparamId);
  }
  
  @Delete('delpram/:brandname')
  hardDelePrams(
    @Param('brandname') brandName: string
  )
  {
    console.log(brandName);
    console.log("Funciton Checking ",this.hardDelePrams);
  }
}