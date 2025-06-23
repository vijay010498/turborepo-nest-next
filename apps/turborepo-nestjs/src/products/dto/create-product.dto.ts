import { CreateProductRequest } from '@repo/types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto extends CreateProductRequest {
  @ApiProperty()
  declare name: string;

  @ApiProperty()
  declare price: number;
}
