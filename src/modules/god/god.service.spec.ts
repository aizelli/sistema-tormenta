import { Test, TestingModule } from '@nestjs/testing';
import { GodService } from './god.service';

describe('GodService', () => {
  let service: GodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GodService],
    }).compile();

    service = module.get<GodService>(GodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
