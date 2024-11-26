import { Test, TestingModule } from '@nestjs/testing';
import { CarinfoController } from './carinfo.controller';
import { CarinfoService } from './carinfo.service';

describe('CarinfoController', () => {
  let controller: CarinfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarinfoController],
      providers: [CarinfoService],
    }).compile();

    controller = module.get<CarinfoController>(CarinfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
