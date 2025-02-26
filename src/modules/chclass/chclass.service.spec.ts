import { Test, TestingModule } from '@nestjs/testing';
import { ChclassService } from './chclass.service';

describe('ChclassService', () => {
  let service: ChclassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChclassService],
    }).compile();

    service = module.get<ChclassService>(ChclassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
