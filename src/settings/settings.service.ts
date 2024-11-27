import { Injectable } from '@nestjs/common';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CarType } from './entities/cartype.entity';
import { Repository } from 'typeorm';
import { Brand } from './entities/brand.entity';

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(Brand)
    private brandRepository: Repository<Brand>,

    @InjectRepository(CarType)
    private cartypeRepository: Repository<CarType>,
  ) {}

  async createCartype(createSettingDto: CreateSettingDto) {
    const cartype =  this.cartypeRepository.create(createSettingDto);
    return this.cartypeRepository.save(cartype);
    // return 'This action adds a new setting';
  }

  async createBrand(createSettingDto: CreateSettingDto) {
    const Brand =  this.brandRepository.create(createSettingDto);
    return this.brandRepository.save(Brand);
    // return 'This action adds a new setting';
  }

  findAll() {
    return `This action returns all settings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} setting`;
  }

  update(id: number, updateSettingDto: UpdateSettingDto) {
    return `This action updates a #${id} setting`;
  }

  remove(id: number) {
    return `This action removes a #${id} setting`;
  }
}
