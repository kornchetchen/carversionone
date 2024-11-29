import { Controller, Get, Post, Body, Patch, Param, Delete, Query} from '@nestjs/common';
import { SettingsService } from './settings.service';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';


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





  @Get('cartypequery')
 async getcartype(
  @Query('cartype') cartype: string,
  @Query('cartypeId') cartypeId: string,
  @Query('cartypeName') cartypeName: string,
  @Query('cartypeDescription') cartypeDescription: string
) {

    console.log(cartype);
    console.log(cartypeId);
    console.log(cartypeName);
    console.log(cartypeDescription);

    return cartype ;
  }







  @Get('brandnames')
 async  getBrands(
  @Query('brand') brand: string,
  @Query('brandId') brandId: string,
  @Query('brandName') brandName: string,
  @Query('brandDescription') brandDescription: string

) {
    console.log(brand);
    console.log(brandId);
    console.log(brandName);
    console.log(brandDescription);

    return brand ;
  }




  
@Get('more') 
searchSettings(
  @Query('brandname') brandName: string,
  @Query('cartype') cartype: string,
): string {
  console.log(cartype);
  console.log(brandName);
  return`Brand: ${brandName}, Cartype: ${cartype}`;
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



@Get('brandsss')
searchBrandTimeParseInt(
  @Query('createAt') createAtParam: string,
  @Query('updateAt') updateAtParam: string,
) {
  console.log(createAtParam);
  console.log(updateAtParam);
}


  @Get('byId/:brand')
  async findOnebarndById(
    @Param('id') id: string,
    @Param('brand') brand: string
  )
      
  { 
    console.log(id);
    console.log(brand);
    console.log("string function ",this.findOnebarndById);
  }


  @Get('byCarType/:id/:cartype/:color') ///path first => param
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

  @Get(':brand')
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

  @Get(':brand/:brandname')
  async findOnecartypebrandName(@Param('brandName') brandName: string) { 
    console.log(brandName);
  }
  
  @Get(':cartype/:model')
  async findOnecartypemodel(@Param('model')   model: string) { 
    console.log(model);
  }
//uuid
  @Patch('cartype/:id')
  updateCartype(@Param('id') id: UpdateSettingDto,
   @Body() updateSettingDto: UpdateSettingDto) {
    console.log(updateSettingDto);
  }

  @Patch('brand/:id')
  updateBrand(@Param('id') id: string, @Body() updateSettingDto: UpdateSettingDto) {
    console.log(updateSettingDto);
  }

  @Patch('brand/:id')
  async updateBrandDates (
    @Param('id') id: string,
    @Body() updateSettingDto: UpdateSettingDto,
    @Query('createAt') createAtParam: UpdateSettingDto,
    @Query('updateAt') updateAtParam: UpdateSettingDto,
  ) {
    console.log(createAtParam);
    console.log(updateAtParam);
//parma private static //quer for using on public 

  }

  @Delete(':id')
  remove(@Param('id') id: UpdateSettingDto) {
    console.log(id);
  }
}
