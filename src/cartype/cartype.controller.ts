import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartypeService } from './cartype.service';
import { CreateCartypeDto } from './dto/create-cartype.dto';
import { UpdateCartypeDto } from './dto/update-cartype.dto';

@Controller('cartype')
export class CartypeController {
  constructor(private readonly cartypeService: CartypeService) {}

  @Post()
  create(@Body() createCartypeDto: CreateCartypeDto) {
    return this.cartypeService.create(createCartypeDto);
  }

  @Get()
  findAll() {
    return this.cartypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartypeDto: UpdateCartypeDto) {
    return this.cartypeService.update(+id, updateCartypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartypeService.remove(+id);
  }
}
