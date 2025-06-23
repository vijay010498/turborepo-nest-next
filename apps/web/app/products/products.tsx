import { Product } from "@repo/types";

export default async function Products() {
  const reponse = await fetch(`${process.env.API_URL}/products`, {
    next: {
      tags: ["products"],
    },
  });

  const products: Product[] = await reponse.json();

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <p>Name:{product.name}</p>
            <p>Price:{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
