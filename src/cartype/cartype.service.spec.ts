import { Test, TestingModule } from '@nestjs/testing';
import { CartypeService } from './cartype.service';

describe('CartypeService', () => {
  let service: CartypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CartypeService],
    }).compile();

    service = module.get<CartypeService>(CartypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
