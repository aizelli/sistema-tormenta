import { Test, TestingModule } from '@nestjs/testing';
import { ShildController } from './shild.controller';
import { ShildService } from './shild.service';

describe('ShildController', () => {
  let controller: ShildController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShildController],
      providers: [ShildService],
    }).compile();

    controller = module.get<ShildController>(ShildController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
