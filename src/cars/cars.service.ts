import { Injectable } from '@nestjs/common';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>
  ) {}


  async create(createCarDto: CreateCarDTO) {
   const car = await this.carRepository.create(createCarDto);
    return this.carRepository.save(car);
  }

  async findAll() {
    const car = await this.carRepository.find();
    return car;
    // return `This action returns all cars`;
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
