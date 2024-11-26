import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './entities/car.entity';
import { throwError } from 'rxjs';

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

 async findOne(id: string) {
  try {
    const car = await this.carRepository.findOne({where:{id}});
    if(!car) throw new Error('Car not found');
    car.name = "test"
    return car;
  } catch (error) {
    throw new BadRequestException(error.message);
  }
    // return `This action returns a #${id} car`;
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  async remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
