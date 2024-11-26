import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarinfoModule } from './carinfo/carinfo.module';
import { CartypeModule } from './cartype/cartype.module';
import { PromotionModule } from './promotion/promotion.module';
import { SellhistoryModule } from './sellhistory/sellhistory.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'carversionone',
    entities: [ 'dist/**/*.entity{.ts,.js}'], //this craete for auto adding entities
    migrationsRun: false,
    synchronize: true,
  }),CarsModule, CarinfoModule, CartypeModule, PromotionModule, SellhistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
