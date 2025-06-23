import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import type { Product } from '@repo/types';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  createProduct(@Body() createProductRequest: CreateProductDto): Product {
    return this.productsService.createProduct(createProductRequest);
  }

  @Get()
  getProducts(): Product[] {
    return this.productsService.getAllProducts();
  }
}
