import { CreateProductRequest } from "../dto/create-product.request";
import { UUID } from "crypto";

export interface Product extends CreateProductRequest {
  id: UUID
}
