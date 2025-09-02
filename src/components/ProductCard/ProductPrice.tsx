import "./styles.css"

export const ProductPrices = ({
  price,
  oldPrice,
  discount
}: {
  price: string
  oldPrice?: string
  discount?: string
}) => {
  return (
    <div className="product-card__price prices">
      <div className="product-card__price-normal price-normal">{price} ₽</div>
      {oldPrice && (
        <div className="product-card__price-old price-old">{oldPrice} ₽</div>
      )}

      {discount && (
        <div className="product-card__discount discount">-{discount}%</div>
      )}
    </div>
  )
}