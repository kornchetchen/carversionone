import { Module } from '@nestjs/common';
import { SellhistoryService } from './sellhistory.service';
import { SellhistoryController } from './sellhistory.controller';

@Module({
  controllers: [SellhistoryController],
  providers: [SellhistoryService],
})
export class SellhistoryModule {}
