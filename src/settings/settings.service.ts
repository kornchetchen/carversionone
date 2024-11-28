import { Injectable, NotFoundException } from '@nestjs/common';
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
    try {
      const cartype = this.cartypeRepository.create(createSettingDto);
      return this.cartypeRepository.save(cartype);
    } catch (error) {
      throw new Error(`Create cartype error: ${error.message}.`);
    }
    // const cartype =  this.cartypeRepository.create(createSettingDto);
    // return this.cartypeRepository.save(cartype);
    // return 'This action adds a new setting';
  }

  async createBrand(createSettingDto: CreateSettingDto) {
    const bran =  this.brandRepository.create(createSettingDto);
    return this.brandRepository.save(bran);
    // return 'This action adds a new setting';
  }

  findAll(brand: string, cartype: string) {
    return `This action returns all settings`;
  }

  findOne(id: number) {
    this.findOne(id);
    return
    // return `This action returns a #${id} setting`;
  }

async updateCartype(id: string, updateSettingDto: UpdateSettingDto): Promise<CarType> {
  if (!id)
    throw new Error(`updateCartype error: id is empty.`);
  try {
    const cartype = await this.cartypeRepository.findOne({ where: { carTypeId: id } });
    if (!cartype) throw new NotFoundException('Cartype not found');
    // updateSettingDto.carTypeId = id;
    return await this.cartypeRepository.save(updateSettingDto);
  } catch (ex: any) {
    throw new Error(`Update cartype error: ${ex.message}.`);
  }
}
  async updateBrand(id: string, updateSettingDto: UpdateSettingDto):Promise<Brand> {
    if (!id)
      throw new Error(`updateCartype error: id is empty.`);
    try {
      const cartype = await this.brandRepository.findOne({ where: { brandId: id } });
      if (!cartype) throw new NotFoundException('Cartype not found');
      // updateSettingDto.brandId = id;
      return await this.brandRepository.save(updateSettingDto);
    } catch (ex: any) {
      throw new Error(`Update cartype error: ${ex.message}.`);
    }
  }
  remove(id: number) {
    return `This action removes a #${id} setting`;
  }
}
