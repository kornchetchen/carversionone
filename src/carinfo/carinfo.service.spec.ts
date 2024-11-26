import { Test, TestingModule } from '@nestjs/testing';
import { CarinfoService } from './carinfo.service';

describe('CarinfoService', () => {
  let service: CarinfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarinfoService],
    }).compile();

    service = module.get<CarinfoService>(CarinfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
