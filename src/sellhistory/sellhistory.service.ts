import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSellhistoryDto } from './dto/create-sellhistory.dto';
import { UpdateSellhistoryDto } from './dto/update-sellhistory.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sellhistory } from './entities/sellhistory.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SellhistoryService {
  constructor(
    @InjectRepository(Sellhistory)
    private sellhistoryRepository: Repository<Sellhistory>,
  ){}
  async create(createSellhistoryDto: CreateSellhistoryDto) {
    const sellhisto = this.sellhistoryRepository.create(createSellhistoryDto);  
    return await this.sellhistoryRepository.save(sellhisto);
    // return 'This action adds a new sellhistory';
  }

  // async findAll() {
  //   const sellhisto = await this.sellhistoryRepository.find();
  //   return sellhisto;
  //   // return `This action returns all sellhistory`;
  // }

  // async findOne(id: string) {
  //   try {
  //     const sellhisto = await this.sellhistoryRepository.findOne({where:{id}});
  //     if(!sellhisto) throw new Error('Car not found');
  //     sellhisto.name = "test"
  //     return sellhisto;
  //   } catch (error) {
  //     throw new BadRequestException(error.message);
  //   }
  //     // return `This action returns a #${id} car`;
  //   }

  // update(id: number, updateSellhistoryDto: UpdateSellhistoryDto) {
  //   return `This action updates a #${id} sellhistory`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} sellhistory`;
  // }
}
