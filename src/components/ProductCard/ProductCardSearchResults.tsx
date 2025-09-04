import { ProductPrices } from './ProductPrice';
import './styles.css';
import type { ProductCardProps } from './types';

interface ProductCardSeacrhResultProps extends ProductCardProps {}

export const ProductCardSeacrhResult = ({
  image,
  title,
  price,
  oldPrice,
  discount,
}: ProductCardSeacrhResultProps) => {
  return (
    <a href="#" className="card-search-result">
      <ProductImage image={image} />

      <div className="card-search-result__info">
        <ProductTitle title={title} />

        <ProductPrices price={price} oldPrice={oldPrice} discount={discount} />
      </div>
    </a>
  );
};

const ProductTitle = ({ title }: { title: string }) => {
  return (
    <a href="#" className="card-search-result__title">
      {title}
    </a>
  );
};

const ProductImage = ({ image }: { image: string }) => {
  return (
    <a href="#" className="card-search-result__image">
      <img src={`images/products/${image}.jpg`} alt="" />
    </a>
  );
};
