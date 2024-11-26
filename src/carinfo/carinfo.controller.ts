import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarinfoService } from './carinfo.service';
import { CreateCarinfoDto } from './dto/create-carinfo.dto';
import { UpdateCarinfoDto } from './dto/update-carinfo.dto';

@Controller('carinfo')
export class CarinfoController {
  constructor(private readonly carinfoService: CarinfoService) {}

  @Post()
  create(@Body() createCarinfoDto: CreateCarinfoDto) {
    return this.carinfoService.create(createCarinfoDto);
  }

  @Get()
  findAll() {
    return this.carinfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carinfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarinfoDto: UpdateCarinfoDto) {
    return this.carinfoService.update(+id, updateCarinfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carinfoService.remove(+id);
  }
}
