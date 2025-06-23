import { Injectable } from '@nestjs/common';
import { CreateProductRequest, Product } from '@repo/types';
import { randomUUID } from 'crypto';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [];

  createProduct(createProductRequest: CreateProductRequest): Product {
    const product: Product = {
      ...createProductRequest,
      id: randomUUID(),
    };
    this.products.push(product);
    return product;
  }

  getAllProducts(): Product[] {
    return this.products;
  }
}
