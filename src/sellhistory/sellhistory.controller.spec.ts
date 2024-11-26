import { Test, TestingModule } from '@nestjs/testing';
import { SellhistoryController } from './sellhistory.controller';
import { SellhistoryService } from './sellhistory.service';

describe('SellhistoryController', () => {
  let controller: SellhistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SellhistoryController],
      providers: [SellhistoryService],
    }).compile();

    controller = module.get<SellhistoryController>(SellhistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
