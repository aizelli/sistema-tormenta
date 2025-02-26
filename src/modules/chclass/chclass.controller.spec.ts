import { Test, TestingModule } from '@nestjs/testing';
import { ChclassController } from './chclass.controller';
import { ChclassService } from './chclass.service';

describe('ChclassController', () => {
  let controller: ChclassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChclassController],
      providers: [ChclassService],
    }).compile();

    controller = module.get<ChclassController>(ChclassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
