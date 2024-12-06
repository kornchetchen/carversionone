import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CarType } from './entities/cartype.entity';
import { DataSource, Repository } from 'typeorm';
import { Brand } from './entities/brand.entity';
import { CarTypeEnum } from './sell.model';


@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(Brand)
    private brandRepository: Repository<Brand>,

    @InjectRepository(CarType)
    private cartypeRepository: Repository<CarType>,
  ) {}


  async createBrand(createSettingDto: CreateSettingDto) {
    const branCreate =  this.brandRepository.create(createSettingDto);
    return this.brandRepository.save(branCreate);

  }


  async createCartype(createSettingDto: CreateSettingDto) {
    try {
      const cartype = this.cartypeRepository.create(createSettingDto);
      return this.cartypeRepository.save(cartype);
    } catch (error) {
      throw new Error(`Create cartype error: ${error.message}.`);
    }
  }
  async getCartypeById(carTypeId: string): Promise<CarType> {
    try {
      const cartype = await this.cartypeRepository.findOne({ where: { carTypeId } });
      if (!cartype) {
        throw new NotFoundException(`Cartype with id ${carTypeId} not found`);
      }
      return cartype;
    } catch (error) {
      throw new Error(`Get cartype by id error: ${error.message}`);
    }
  }
  
  async getbrandpeById(brandId: string): Promise<Brand> {
    try {
      const brands = await this.brandRepository.findOne({ where: { brandId } });
      if (!brands) {
        throw new NotFoundException(`Cartype with id ${brandId} not found`);
      }
      return brands;
    } catch (error) {
      throw new Error(`Get cartype by id error: ${error.message}`);
    }
  }

  
// async getCarTypeByModel(model:CarTypeEnum ): Promise<CarType> {
//   try {
// const carTypeModel = await this.cartypeRepository.findOne({ where: { model } });
//     if (!carTypeModel) {
//       throw new NotFoundException(`Brand with created at ${model} not found`);
//     }
//     return carTypeModel;
//   } catch (error) {
//     throw new Error(`Get brand by year error: ${error.message}`);
//   }
// }
async getAllCarTypeDetailsByModel(model: CarTypeEnum): Promise<any> {
  try {
    const carTypeModel = await this.cartypeRepository.findBy({ model });
    if (!carTypeModel) {
      throw new NotFoundException(`Brand with created at ${model} not found`);
    }
    const details = carTypeModel.map((carType) => ({
      id: carType.carTypeId,
      carTypeId: carType.carTypeId,
      model: carType.model,
      createdAt: carType.createdAt,
      updatedAt: carType.updatedAt,
      deletedAt: carType.deletedAt,
    }));
    return details;
  } catch (error) {
    throw new Error(`Get brand by year error: ${error.message}`);
  }
}
}
  
// async findOneCartype(id: string) {
//  const setting = await this.cartypeRepository.findOneBy({ carTypeId: id });
//   if (!setting) {
//     throw new NotFoundException(`Setting with ID #${id} not found`);
//   }
//   return setting;
// }
// async findMany2(dto:CreateSettingDto){
//   const { brandName ,settingId,brandId ,carTypeId , model,createdAt,updatedAt,deletedAt } = dto;
//   const quryBuilder = this.cartypeRepository.createQueryBuilder('cartype');
  
//   carTypeId && quryBuilder.andWhere('cartype.carTypeId = :id', { carTypeId });
//   settingId && quryBuilder.andWhere('cartype.settingId = :id', { settingId });
//   brandId && quryBuilder.andWhere('cartype.brandId = :id', { brandId });
//   brandName && quryBuilder.andWhere('cartype.brandName = :name', { brandName });
//   model && quryBuilder.andWhere('cartype.carTypeId = :model', { model });
//   createdAt && quryBuilder.andWhere('cartype.brandName = :createdAt', { createdAt });
// }

// async timerQuery() {
//   return this.brandRepository
// .createQueryBuilder('brand')
// .where('brand.brandId = :id', { id:2 })
// .andWhere('brand.createdAt = :createdAt', { createdAt:new Date() })
// .andWhere('brand.updatedAt = :updatedAt', { updatedAt:new Date() })
// .andWhere('brand.deletedAt = :deletedAt', { deletedAt :null})
// .getOne();  
// }


// async updateCartype(id: string, updateSettingDto: UpdateSettingDto): Promise<CarType> {
//   if (!id)
//     throw new Error(`updateCartype error: id is empty.`);
//   try {
//     const cartype = await this.cartypeRepository.findOne({ where: { carTypeId: id } });
//     if (!cartype) throw new NotFoundException('Cartype not found');
//     // updateSettingDto.carTypeId = id;
//     return await this.cartypeRepository.save(updateSettingDto);
//   } catch (ex: any) {
//     throw new Error(`Update cartype error: ${ex.message}.`);
//   }
// }



//   async updateBrand(id: string, updateSettingDto: UpdateSettingDto):Promise<Brand> {
//     if (!id)
//       throw new Error(`updateCartype error: id is empty.`);
//     try {
//       const cartype = await this.brandRepository.findOne({ where: { brandId: id } });
//       if (!cartype) throw new NotFoundException('Cartype not found');
//       // updateSettingDto.brandId = id;
//       return await this.brandRepository.save(updateSettingDto);
//     } catch (ex: any) {
//       throw new Error(`Update cartype error: ${ex.message}.`);
//     }
//   }

  // remove(id: number) {
  //   return `This action removes a #${id} setting`;
  // }


  //adding soft delete
  // async Sofremove(id: number) {
  //   const usertest = await connection()
  //                   .softDelete()
  //                   .from(CarType)
  //                   .where("id = :id", { id: 1 })
  //                   .PrimaryGeneratedColumn()
  //                   .execute();
  //   console.log(usertest);

    // return `This action removes a #${id} setting`;
// }
