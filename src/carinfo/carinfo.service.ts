import { Injectable } from '@nestjs/common';
import { CreateCarinfoDto } from './dto/create-carinfo.dto';
import { UpdateCarinfoDto } from './dto/update-carinfo.dto';

@Injectable()
export class CarinfoService {
  create(createCarinfoDto: CreateCarinfoDto) {
    return 'This action adds a new carinfo';
  }

  findAll() {
    return `This action returns all carinfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carinfo`;
  }

  update(id: number, updateCarinfoDto: UpdateCarinfoDto) {
    return `This action updates a #${id} carinfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} carinfo`;
  }
}
