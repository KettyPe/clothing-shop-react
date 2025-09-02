import "./styles.css"
import type { ProductCardProps } from "./types"

interface ProductCardSeacrhResultProps extends ProductCardProps { }

export const ProductCardSeacrhResult = ({
  image,
  title,
  price,
  oldPrice,
  discount
}: ProductCardSeacrhResultProps) => {
  return (
    <a href="#" className="card-search-result">
      <a href="#" className="card-search-result__image">
        <img src={`images/products/${image}.jpg`} alt="" />
      </a>
      <div className="card-search-result__info">
        <a href="#" className="card-search-result__title">{title}</a>
        <div className="card-search-result__price prices">
          <div className="card-search-result__price-normal price-normal">{price} ₽</div>
          {oldPrice && (
            <div className="card-search-result__price-old price-old">{oldPrice} ₽</div>
          )}

          {discount && (
            <div className="card-search-result__discount discount">-{discount}%</div>
          )}
        </div>
      </div>
    </a>
  )
}