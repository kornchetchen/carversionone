import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePromotionDTO } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Promotion } from './entities/promotion.entity';

@Injectable()
export class PromotionService {
  constructor(
    @InjectRepository(Promotion)
    private promotionRepository: Repository<Promotion>,
  ){}
  // async create(createPromotionDTO: CreatePromotionDTO) {
  //   const promotions = await this.promotionRepository.create(createPromotionDTO);
  //    return this.promotionRepository.save(promotions);
  //  }

  // async findAll() {
  //    return this.promotionRepository.find();
  //   // return `This action returns all promotion`;
  // }

  // async findOne(id: string) {
  //   try {
  //     const promotions = await this.promotionRepository.findOne({where:{id}});
  //     if(!promotions) throw new Error('Car not found');
  //     promotions.id = "test"
  //     return promotions;
  //   } catch (error) {
  //     throw new BadRequestException(error.message);
  //   }
  //     // return `This action returns a #${id} promotion`;
  //   }

  // update(id: number, updatePromotionDto: UpdatePromotionDto) {
  //   return `This action updates a #${id} promotion`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} promotion`;
  // }
}
