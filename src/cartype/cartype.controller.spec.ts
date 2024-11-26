import { Test, TestingModule } from '@nestjs/testing';
import { CartypeController } from './cartype.controller';
import { CartypeService } from './cartype.service';

describe('CartypeController', () => {
  let controller: CartypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartypeController],
      providers: [CartypeService],
    }).compile();

    controller = module.get<CartypeController>(CartypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
