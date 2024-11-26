import { Injectable } from '@nestjs/common';
import { CreateCartypeDto } from './dto/create-cartype.dto';
import { UpdateCartypeDto } from './dto/update-cartype.dto';

@Injectable()
export class CartypeService {
  create(createCartypeDto: CreateCartypeDto) {
    return 'This action adds a new cartype';
  }

  findAll() {
    return `This action returns all cartype`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cartype`;
  }

  update(id: number, updateCartypeDto: UpdateCartypeDto) {
    return `This action updates a #${id} cartype`;
  }

  remove(id: number) {
    return `This action removes a #${id} cartype`;
  }
}
