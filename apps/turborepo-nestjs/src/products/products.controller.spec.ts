import { ProductsController } from './products.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: ProductsService,
          useValue: {},
        },
      ],
    }).compile();
    controller = module.get<ProductsController>(ProductsController);
  });

  it('should de defined', () => {
    expect(controller).toBeDefined();
  });
});
