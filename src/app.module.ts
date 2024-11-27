import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarinfoModule } from './carinfo/carinfo.module';
import { CartypeModule } from './cartype/cartype.module';
import { PromotionModule } from './promotion/promotion.module';
import { SellhistoryModule } from './sellhistory/sellhistory.module';
import { SettingsModule } from './settings/settings.module';
import { PromotionsModule } from './promotions/promotions.module';
import { CarModule } from './car/car.module';
import { SaleModule } from './date/sale/sale.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'versiononecar',
    entities: [ 'dist/**/*.entity{.ts,.js}'], //this craete for auto adding entities
    migrationsRun: false,
    synchronize: true,
  }), CarinfoModule, CartypeModule, PromotionModule, SellhistoryModule,  SettingsModule, PromotionsModule, CarModule, SaleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
