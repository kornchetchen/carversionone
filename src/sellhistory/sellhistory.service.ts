import { Injectable } from '@nestjs/common';
import { CreateSellhistoryDto } from './dto/create-sellhistory.dto';
import { UpdateSellhistoryDto } from './dto/update-sellhistory.dto';

@Injectable()
export class SellhistoryService {
  create(createSellhistoryDto: CreateSellhistoryDto) {
    return 'This action adds a new sellhistory';
  }

  findAll() {
    return `This action returns all sellhistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sellhistory`;
  }

  update(id: number, updateSellhistoryDto: UpdateSellhistoryDto) {
    return `This action updates a #${id} sellhistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} sellhistory`;
  }
}
