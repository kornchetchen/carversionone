import { Injectable } from '@nestjs/common';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CarInfo } from './entities/carinfo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PromotionsService {
  constructor(
    @InjectRepository(CarInfo)
    private carinfoRepository: Repository<CarInfo>,
  ) {}
  createCarInfo(createPromotionDto: CreatePromotionDto) {
    const carinfo = this.carinfoRepository.create(createPromotionDto);
    return this.carinfoRepository.save(carinfo);
    // return 'This action adds a new promotion';
  }

  findAll() {
    return `This action returns all promotions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} promotion`;
  }

  update(id: number, updatePromotionDto: UpdatePromotionDto) {
    return `This action updates a #${id} promotion`;
  }

  remove(id: number) {
    return `This action removes a #${id} promotion`;
  }
}
