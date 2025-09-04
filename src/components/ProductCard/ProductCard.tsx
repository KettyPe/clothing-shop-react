import './styles.css';
import { Badge } from '../../ui/badge/badge';
import Button from '../../ui/button/Button';
import FavoriteIcon from '../../ui/icons/FavoriteIcon';
import type { ProductCardProps } from './types';
import { ProductPrices } from './ProductPrice';

export const ProductCard = ({
  image,
  title,
  price,
  oldPrice,
  discount,
  badges = [],
}: ProductCardProps) => {
  return (
    <div className="product-card">
      <a href="#" className="product-card__image">
        <img src={`images/products/${image}.jpg`} alt="" />
        {badges.length > 0 && (
          <div className="badge-cards">
            {badges.map((badge, index) => (
              <Badge key={index} variant={badge.variant} text={badge.text} />
            ))}
          </div>
        )}
        <div className="product-favorite">
          <FavoriteIcon />
        </div>
      </a>
      <div className="product-card__info">
        <ProductPrices price={price} oldPrice={oldPrice} discount={discount} />
        <ProductTitle title={title} />
      </div>
      <Button className="product-card__button">Выбрать</Button>
    </div>
  );
};

const ProductTitle = ({ title }: { title: string }) => {
  return (
    <a href="#" className="product-card__title">
      {title}
    </a>
  );
};
