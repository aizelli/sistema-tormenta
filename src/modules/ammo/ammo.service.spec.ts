import { Test, TestingModule } from '@nestjs/testing';
import { AmmoService } from './ammo.service';

describe('AmmoService', () => {
  let service: AmmoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmmoService],
    }).compile();

    service = module.get<AmmoService>(AmmoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
