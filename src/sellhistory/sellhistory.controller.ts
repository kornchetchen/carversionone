import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SellhistoryService } from './sellhistory.service';
import { CreateSellhistoryDto } from './dto/create-sellhistory.dto';
import { UpdateSellhistoryDto } from './dto/update-sellhistory.dto';

@Controller('sellhistory')
export class SellhistoryController {
  constructor(private readonly sellhistoryService: SellhistoryService) {}

  @Post()
  create(@Body() createSellhistoryDto: CreateSellhistoryDto) {
    return this.sellhistoryService.create(createSellhistoryDto);
  }

  @Get()
  findAll() {
    return this.sellhistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellhistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSellhistoryDto: UpdateSellhistoryDto) {
    return this.sellhistoryService.update(+id, updateSellhistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellhistoryService.remove(+id);
  }
}
