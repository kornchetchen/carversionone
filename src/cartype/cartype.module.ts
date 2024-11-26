import { Module } from '@nestjs/common';
import { CartypeService } from './cartype.service';
import { CartypeController } from './cartype.controller';

@Module({
  controllers: [CartypeController],
  providers: [CartypeService],
})
export class CartypeModule {}
