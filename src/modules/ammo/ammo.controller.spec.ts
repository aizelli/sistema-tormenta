import { Test, TestingModule } from '@nestjs/testing';
import { AmmoController } from './ammo.controller';
import { AmmoService } from './ammo.service';

describe('AmmoController', () => {
  let controller: AmmoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AmmoController],
      providers: [AmmoService],
    }).compile();

    controller = module.get<AmmoController>(AmmoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
