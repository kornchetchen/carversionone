import { Module } from '@nestjs/common';
import { SellhistoryService } from './sellhistory.service';
import { SellhistoryController } from './sellhistory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sellhistory } from './entities/sellhistory.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Sellhistory])],
  controllers: [SellhistoryController],
  providers: [SellhistoryService],
})
export class SellhistoryModule {}
