import { Test, TestingModule } from '@nestjs/testing';
import { GodController } from './god.controller';
import { GodService } from './god.service';

describe('GodController', () => {
  let controller: GodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GodController],
      providers: [GodService],
    }).compile();

    controller = module.get<GodController>(GodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
