import { ProductCard } from '../ProductCard/ProductCard';
import type { Products } from './Products';

interface ProductListProps {
  products: Products[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      {products.map(({ id, image, title, price, oldPrice, discount, badges }) => (
        <ProductCard
          key={id}
          image={image}
          title={title}
          price={price}
          oldPrice={oldPrice}
          discount={discount}
          badges={badges}
        />
      ))}
    </>
  );
};
