import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PromotionService } from './promotion.service';
import { CreatePromotionDTO } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';

@Controller('promotion')
export class PromotionController {
  constructor(private readonly promotionService: PromotionService) {}

  // @Post()
  // async create(@Body() createPromotionDto: CreatePromotionDTO) {
  //   return this.promotionService.create(createPromotionDto);
  // }

  // @Get()
  // findAll() {
  //   return this.promotionService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.promotionService.findOne(id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePromotionDto: UpdatePromotionDto) {
  //   return this.promotionService.update(+id, updatePromotionDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.promotionService.remove(+id);
  // }
}
