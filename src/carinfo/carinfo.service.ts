import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCarinfoDTO } from './dto/create-carinfo.dto';
import { UpdateCarinfoDto } from './dto/update-carinfo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CarInfo } from '../promotions/entities/carinfo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarinfoService {
  //   const carinfo = await this.carinfoRepository.create(createCarinfoDto);
  //   return this.carinfoRepository.save(carinfo);
  // }
  // async findAll() {
  //   const carinfo = await this.carinfoRepository.find();
  //   return carinfo;
  // }
  // async findOne(id: string) {
  //   try {
  //     const carInfo = await this.carinfoRepository.findOne({where:{carinfo_id:id}});
  //     if(!carInfo) throw new Error('Car not found');
  //     return carInfo;
  //   } catch (error) {
  //     throw new BadRequestException(error.message);
  //   }
  //     // return `This action returns a #${id} car`;
  //   }
  // update(id: number, updateCarinfoDto: UpdateCarinfoDto) {
  //   return `This action updates a #${id} carinfo`;
  // }
  // remove(id: number) {
  //   return `This action removes a #${id} carinfo`;
  // }
  // create(createCarinfoDto: CreateCarinfoDTO) {
  //   throw new Error('Method not implemented.');
  // }
  constructor(
    @InjectRepository(CarInfo)
    private carinfoRepository: Repository<CarInfo>
  ){}

  async create(createCarinfoDto: CreateCarinfoDTO) {
    const carinfo = await this.carinfoRepository.create(createCarinfoDto);
    return this.carinfoRepository.save(carinfo);
  }

  // async findAll() {
  //   const carinfo = await this.carinfoRepository.find();
  //   return carinfo;
  // }

  // async findOne(id: string) {
  //   try {
  //     const carInfo = await this.carinfoRepository.findOne({where:{carinfo_id:id}});
  //     if(!carInfo) throw new Error('Car not found');
  //     return carInfo;
  //   } catch (error) {
  //     throw new BadRequestException(error.message);
  //   }
  //     // return `This action returns a #${id} car`;
  //   }

  // update(id: number, updateCarinfoDto: UpdateCarinfoDto) {
  //   return `This action updates a #${id} carinfo`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} carinfo`;
  // }
}
