import "./styles.css"
import { Badge } from "../../ui/badge/badge"
import Button from "../../ui/button/Button"
import FavoriteIcon from "../../ui/icons/FavoriteIcon"
import type { ProductCardProps } from "./types"

export const ProductCard = ({
  image,
  title,
  price,
  oldPrice,
  discount,
  badges = []
}: ProductCardProps) => {
  return (
    <div className="product-card">
      <a href="#" className="product-card__image">
        <img src={`images/products/${image}.jpg`} alt="" />

        {badges.length > 0 && (
          <div className="badge-cards">
            {badges.map((badge, index) => (
              <Badge
                key={index}
                variant={badge.variant}
                text={badge.text}
              />
            ))}
          </div>
        )}

        <div className="product-favorite">
          <FavoriteIcon/>
        </div>
      </a>
      <div className="product-card__info">
        <div className="product-card__price prices">
          <div className="product-card__price-normal price-normal">{price} ₽</div>
          {oldPrice && (
            <div className="product-card__price-old price-old">{oldPrice} ₽</div>
          )}

          {discount && (
            <div className="product-card__discount discount">-{discount}%</div>
          )}
        </div>
        <a href="#" className="product-card__title">{title}</a>
      </div>
      <Button className="product-card__button">Выбрать</Button>
    </div>
  )
}