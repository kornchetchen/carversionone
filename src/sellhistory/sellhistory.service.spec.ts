import { Test, TestingModule } from '@nestjs/testing';
import { SellhistoryService } from './sellhistory.service';

describe('SellhistoryService', () => {
  let service: SellhistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellhistoryService],
    }).compile();

    service = module.get<SellhistoryService>(SellhistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
