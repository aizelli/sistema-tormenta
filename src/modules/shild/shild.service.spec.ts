import { Test, TestingModule } from '@nestjs/testing';
import { ShildService } from './shild.service';

describe('ShildService', () => {
  let service: ShildService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShildService],
    }).compile();

    service = module.get<ShildService>(ShildService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
