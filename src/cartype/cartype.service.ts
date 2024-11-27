import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCartpeDTO } from './dto/create-cartype.dto';
import { UpdateCartypeDto } from './dto/update-cartype.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarType } from '../settings/entities/cartype.entity';

@Injectable()
export class CartypeService {
  constructor(
    @InjectRepository(CarType)
    private cartypeRepository: Repository<CarType>,
  ){}
  // async create(createCartpeDTO: CreateCartpeDTO) {
  //   const car = await this.cartypeRepository.create(createCartpeDTO);
  //    return this.cartypeRepository.save(car);
  //  }

  // async findAll() {
  //   const carType = await this.cartypeRepository.find();
  //   return carType;
  //   // return `This action returns all cartype`;
  // }

  // async findOne(id: string) {
  //   try {
  //     const cartype = await this.cartypeRepository.findOne({where:{id}});
  //     if(!cartype) throw new Error('Car not found');
  //     cartype.id= "test"
  //     return cartype;
  //   } catch (error) {
  //     throw new BadRequestException(error.message);
  //   }
  //     // return `This action returns a #${id} car`;
  //   }

  // update(id: number, updateCartypeDto: UpdateCartypeDto) {
  //   return `This action updates a #${id} cartype`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} cartype`;
  // }
}
