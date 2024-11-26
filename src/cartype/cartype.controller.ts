import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { CartypeService } from './cartype.service';
import { CreateCartpeDTO } from './dto/create-cartype.dto';
import { UpdateCartypeDto } from './dto/update-cartype.dto';

@Controller('cartype')
export class CartypeController {
  constructor(private readonly cartypeService: CartypeService) {}

  @Post()
  async create(@Body() createCartypeDto: CreateCartpeDTO) {
    return this.cartypeService.create(createCartypeDto);
  }

  @Get()
  async findAll() {
    return this.cartypeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const cartype = await this.cartypeService.findOne(id);
      if(!cartype) throw new Error('Car not found');
      cartype.model = "test"
      return cartype;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
      // return `This action returns a #${id} car`;
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
