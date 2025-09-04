import { useState} from 'react';
import './style.css';
import type { BadgeProps } from '../../ui/badge/badge';
import { products } from '../data';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { ProductList } from './ProductList';

export interface Products {
  id: number;
  image: string;
  title: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  badges?: BadgeProps[];
}

export const Products = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMoreRef = useInfiniteScroll(
    () => {
      setVisibleCount((prev) => Math.min(prev + 3, products.length));
    },
    { root: null, rootMargin: '0px 0px 120px 0px' }
  );

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <div className="products">
      <div className="products__container container">
        <div className="products__cards">
          <ProductList products={visibleProducts} />

          {visibleCount < products.length && (
            <div ref={loadMoreRef} className="h-10 col-span-full flex justify-center items-center">
              <span className="text-gray-500">Загрузка...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
