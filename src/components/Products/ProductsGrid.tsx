import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import type { BadgeProps } from "../../ui/badge/badge";
import { ProductCard } from "../ProductCard/ProductCard";
import { products } from "../data";

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
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          setVisibleCount((prev) => {
            if (prev < products.length) {
              return Math.min(prev + 3, products.length);
            }
            return prev;
          });
        }
      },
      // { threshold: 1.0 } ,
      { root: null, rootMargin: "0px 0px 120px 0px" }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, []);

  return (
    <div className='products'>
      <div className="products__container container">
        <div className="products__cards">
          {products.slice(0, visibleCount).map((card) => {
            const { id, image, title, price, oldPrice, discount, badges } = card;

            return (
              <ProductCard
                key={id}
                image={image}
                title={title}
                price={price}
                oldPrice={oldPrice}
                discount={discount}
                badges={badges}
              />
            )
          })}

          {visibleCount < products.length && (
            <div ref={loadMoreRef} className="h-10 col-span-full flex justify-center items-center">
              <span className="text-gray-500">Загрузка...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}