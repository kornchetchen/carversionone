import { BadGatewayException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarType } from './entities/cartype.entity';
import { Brand } from './entities/brand.entity';
import { CarTypeEnum } from './sell.model';
import { Repository } from 'typeorm/repository/Repository';
import { CarInfo } from 'src/promotions/entities/carinfo.entity';
import { Car } from 'src/car/entities/car.entity';
import { BrandnameSettingDto } from './dto/brandname.dto';
import { CarTypeDto, CarTypeUpdate } from './dto/cartype.dto';
import { UpdateCartypeDto } from 'src/cartype/dto/update-cartype.dto';


@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(Brand)
    private brandRepository: Repository<Brand>,

    @InjectRepository(CarType)
    private cartypeRepository: Repository<CarType>,

    @InjectRepository(CarInfo)
    private carinfoRepository: Repository<CarInfo>,
  ) 
  {}

async createModel(carTypeDto: CarTypeDto) {
  const carTypeModel = await this.cartypeRepository.create(carTypeDto);
  return await this.cartypeRepository.save(carTypeModel);
  
}

// async createCarType(createSettingDto: CreateSettingDto) {
//   const cartype = await this.cartypeRepository.create(createSettingDto);
//   return await this.cartypeRepository.save(cartype);
// }

async createCarType(carTypeDto: CarTypeDto) {
  const cartype = await this.cartypeRepository.create(carTypeDto);
  return await this.cartypeRepository.save(cartype);
}


  async getCartypeById(carTypeId: string): Promise<CarType> {
    try {
      const cartype = await this.cartypeRepository.findOne({ where: { carTypeId } });
      if (!cartype) {
        throw new NotFoundException(`Cartype with id ${carTypeId} not found`);
      }
      return await cartype;
    } catch (error) {
      throw new Error(`Get cartype by id error: ${error.message}`);
    }
  }
  async getCarInfoById(carInfoId: string): Promise<CarInfo> {
    try {
      const carInfo = await this.carinfoRepository.findOne({ where: { carInfoId } });
      if (!carInfo) {
        throw new NotFoundException(`Cartype with id ${carInfoId} not found`);
      }
      return await carInfo;
    } catch (error) {
      throw new Error(`Get cartype by id error: ${error.message}`);
    }
  }
async getAllCarTypeDetailsByModel(model: CarTypeEnum): Promise<CarType[]> {
  try {
    const cartypeDetail = await this.cartypeRepository.findBy({ model });
    if (!cartypeDetail) {
      throw new NotFoundException(`Brand with created at ${model} not found`);
    }
    const carDetails = cartypeDetail.map((carType) => ({
      carTypeId: carType.carTypeId,
      model: carType.model,
      createdAt: carType.createdAt,
      updatedAt: carType.updatedAt,
      deletedAt: carType.deletedAt,
    }));
    return  await cartypeDetail;
  } catch (error) {     
    throw new BadGatewayException 
}

}
async getAllCarInfo(carInfo: CarInfo): Promise<CarInfo[]> {
  try {
    const carinfofun = await this.carinfoRepository.findBy(carInfo);
    if (!carinfofun) {
      throw new NotFoundException(`Brand with created at ${carInfo}} not found`);
    }
    const carInfoDetail = carinfofun.map((carInfo) => ({
      carInfoId: carInfo.carInfoId,
      carInfoName: carInfo.carInfoName,
      isActive: carInfo.isActive,
      year: carInfo.year,
      price: carInfo.price,
      color: carInfo.color,
      isAWD: carInfo.isAWD,
    }));
    return  await carinfofun;
  } catch (error) {     
    throw new BadGatewayException 
}


}
async getCarTypemodelwithparam(model: CarTypeEnum): Promise<CarType[]> {
  try {
    const cartypeDetail = await this.cartypeRepository.findBy({ model });
    if (!cartypeDetail) {
      throw new NotFoundException(`Brand with created at ${model} not found`);
    }
    const CarwwithParam = cartypeDetail.filter((carType) => carType.model === model).map((carType) => ({
      carTypeId: carType.carTypeId,
      model: carType.model,
      createdAt: carType.createdAt,
      updatedAt: carType.updatedAt,
      deletedAt: carType.deletedAt,
      carInfo: carType.carInfo,
    }));  ;
    return await CarwwithParam;
  } catch (error) {     
    throw new BadGatewayException 
}
}
async getCarInfoNamewithparam(carInfoName: string): Promise<CarInfo[]> {
  try {
    const carInfoDetail = await this.carinfoRepository.findBy( {carInfoName});
    if (!carInfoDetail) {
      throw new NotFoundException(`Brand with created at ${carInfoName} not found`);
    }
    const CarInfowithParam = carInfoDetail.filter((carInfo) => carInfo.carInfoName === carInfoName).map((carInfo) => ({...carInfo}))
    return await CarInfowithParam;
  } catch (error) {     
    throw new BadGatewayException 
}
}
// async updateCartype(carTypeId:string,model: CarTypeEnum) : Promise<CarType[]> {
//   const updateCarTypes = await this.cartypeRepository.update(carTypeId,{model});
//   if (!updateCarTypes) {
//     throw new NotFoundException(`Cartype with id ${carTypeId} not found`);
//   }
//   return await this.cartypeRepository.save(model);
// } 


async updateCarTypeStauts(carTypeId: string, Model: CarTypeEnum): Promise<CarType> {
  const carTypeModel = { carTypeId, model: Model };
   this.cartypeRepository.update(carTypeId, carTypeModel);
return await this.cartypeRepository.findOneBy({ carTypeId });
}



async updateCarInfoPrice (carInfoId: string, price: number) {
  const carinfoPrice = await this.getCarInfoById(carInfoId);
  carinfoPrice.price = price;
  await this.carinfoRepository.save(carinfoPrice);
  return carinfoPrice
}
// async updateCarTypeStatuss(carTypeId: string, Model: CarTypeEnum,carTypeUpdate: CarTypeUpdate,carTypeDto:CarTypeDto) {
//   const carTypeModel = await  this.cartypeRepository.findOneBy({ carTypeId });
//   const stratdate = new Date(Date.now());
//   const models = carTypeUpdate.model;
//    (carTypeDto) => new CarTypeDto();
//   carTypeModel.model = models;
//   carTypeModel.updatedAt = new Date();
//   await this.cartypeRepository.save(carTypeModel);
// return await this.cartypeRepository.findOneBy({ carTypeId });
// }



async updateCarTypeStatusss(carTypeId: string,Model: CarTypeEnum) {
  const carType = await this.getCartypeById(carTypeId);
  carType.model = Model;
  await this.cartypeRepository.save(carType);

  return carType;

}
// async updateCartype(id: string, updateSettingDto: UpdateSettingDto): Promise<CarType> {
//   if (!id)
//     throw new Error(`updateCartype error: id is empty.`);
//   try {
//     const cartype = await this.cartypeRepository.findOne({ where: { carTypeId: id } });
//     if (!cartype) throw new NotFoundException('Cartype not found');
//     updateSettingDto.carTypeId = id;
//     return await this.cartypeRepository.save(updateSettingDto);
//   } catch (ex: any) {
//     throw new Error(`Update cartype error: ${ex.message}.`);
//   }
// }


async deleteCartype(carTypeId: string) {
  try {
    const deleteCartype = this.cartypeRepository.delete(carTypeId);
    if (!deleteCartype) {
      throw new NotFoundException(`Cartype with id ${carTypeId} not found`);
    }
  } catch (error) {
    return { message: 'Error deleting cartype', error: error.message };
  }
}


async deleteCarInfo(carInfoId: string) {
  try {
    const deltecarinfo = this.carinfoRepository.delete(carInfoId);
    if (!deltecarinfo) {
      throw new NotFoundException(`Cartype with id ${carInfoId} not found`);
    }
  } catch (error) {
    return { message: 'Error deleting cartype', error: error.message };
  }
}

async SoftDeleteCarType(carTypeId:string) { 
  const carTypeSd =  await this.cartypeRepository.softDelete(carTypeId);
  if(!carTypeSd) {
    throw new NotFoundException(`Cartype with id ${carTypeId} not found`);
  }
 
}

}




// async createBrand(createSettingDto: CreateSettingDto) {
//   const branCreate =  this.brandRepository.create(createSettingDto);
//   return this.brandRepository.save(branCreate);

// }

//   async createCartype(createSettingDto: CreateSettingDto) {
//     try {
//       const cartype = this.cartypeRepository.create(createSettingDto);
//       return this.cartypeRepository.save(cartype);
//     } catch (error) {
//       throw new Error(`Create cartype error: ${error.message}.`);
//     }
//   }

//   async getbrandpeById(brandId: string): Promise<Brand> {
//     try {
//       const brands = await this.brandRepository.findOne({ where: { brandId } });
//       if (!brands) {
//         throw new NotFoundException(`Cartype with id ${brandId} not found`);
//       }
//       return brands;
//     } catch (error) {
//       throw new Error(`Get cartype by id error: ${error.message}`);
//     }
//   }

// }

// async getAllBrandInfo( brandName: string): Promise<any> {
//   try {
//     const getAllbrand = await this.brandRepository.findBy({ brandName });
//     if (!getAllbrand) {
//       throw new NotFoundException(`Brand with created at ${brandName} not found`);
//     }
//     const allBrabdDetails = getAllbrand.map((brand) => ({
//       id:brand.brandId,
//       brandName:brand.brandName,
//       CarInfo : brand.carInfo,
//       createAt: brand.createdAt,
//       updateAt : brand.updatedAt,
//       deleteAt: brand.deletedAt
//     }));
//     return  allBrabdDetails;
//   } catch (error) {     
//     throw new BadGatewayException 
// }
// }




// async getWithColor (color: string): Promise<any> {
//   try {
//     const getColor = await this.cartypeRepository.findBy({  });
//     if (!getColor) {
//       throw new NotFoundException(`Cartype with color ${color} not found`);
//     }
//     return getColor;
//   } catch (error) {
//     throw new BadGatewayException();
//   }
// }  
// async getWithCarType (carTypeId: string): Promise<any> {
//   try {
//     const cartype = await this.cartypeRepository.findOne({ where: { carTypeId } });
//     if (!cartype) {
//       throw new NotFoundException(`Cartype with id ${carTypeId} not found`);
//     }
//     return cartype;
//   } catch (error) {
//     throw new Error(`Get cartype by id error: ${error.message}`);
//   }
// }
// }
// //##################################Update Delete ###########################################################

// // async findOneCartype(id: string) {
// //  const setting = await this.cartypeRepository.findOneBy({ carTypeId: id });
// //   if (!setting) {
// //     throw new NotFoundException(`Setting with ID #${id} not found`);
// //   }
// //   return setting;
// // }
// // async findMany2(dto:CreateSettingDto){
// //   const { brandName ,settingId,brandId ,carTypeId , model,createdAt,updatedAt,deletedAt } = dto;
// //   const quryBuilder = this.cartypeRepository.createQueryBuilder('cartype');
  
// //   carTypeId && quryBuilder.andWhere('cartype.carTypeId = :id', { carTypeId });
// //   settingId && quryBuilder.andWhere('cartype.settingId = :id', { settingId });
// //   brandId && quryBuilder.andWhere('cartype.brandId = :id', { brandId });
// //   brandName && quryBuilder.andWhere('cartype.brandName = :name', { brandName });
// //   model && quryBuilder.andWhere('cartype.carTypeId = :model', { model });
// //   createdAt && quryBuilder.andWhere('cartype.brandName = :createdAt', { createdAt });
// // }

// // async timerQuery() {
// //   return this.brandRepository
// // .createQueryBuilder('brand')
// // .where('brand.brandId = :id', { id:2 })
// // .andWhere('brand.createdAt = :createdAt', { createdAt:new Date() })
// // .andWhere('brand.updatedAt = :updatedAt', { updatedAt:new Date() })
// // .andWhere('brand.deletedAt = :deletedAt', { deletedAt :null})
// // .getOne();  
// // }


// // async updateCartype(id: string, updateSettingDto: UpdateSettingDto): Promise<CarType> {
// //   if (!id)
// //     throw new Error(`updateCartype error: id is empty.`);
// //   try {
// //     const cartype = await this.cartypeRepository.findOne({ where: { carTypeId: id } });
// //     if (!cartype) throw new NotFoundException('Cartype not found');
// //     // updateSettingDto.carTypeId = id;
// //     return await this.cartypeRepository.save(updateSettingDto);
// //   } catch (ex: any) {
// //     throw new Error(`Update cartype error: ${ex.message}.`);
// //   }
// // }



// //   async updateBrand(id: string, updateSettingDto: UpdateSettingDto):Promise<Brand> {
// //     if (!id)
// //       throw new Error(`updateCartype error: id is empty.`);
// //     try {
// //       const cartype = await this.brandRepository.findOne({ where: { brandId: id } });
// //       if (!cartype) throw new NotFoundException('Cartype not found');
// //       // updateSettingDto.brandId = id;
// //       return await this.brandRepository.save(updateSettingDto);
// //     } catch (ex: any) {
// //       throw new Error(`Update cartype error: ${ex.message}.`);
// //     }
// //   }

//   // remove(id: number) {
//   //   return `This action removes a #${id} setting`;
//   // }


//   //adding soft delete
//   // async Sofremove(id: number) {
//   //   const usertest = await connection()
//   //                   .softDelete()
//   //                   .from(CarType)
//   //                   .where("id = :id", { id: 1 })
//   //                   .PrimaryGeneratedColumn()
//   //                   .execute();
//   //   console.log(usertest);

//     // return `This action removes a #${id} setting`;
// 
