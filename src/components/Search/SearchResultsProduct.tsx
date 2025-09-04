import './style.css';
import { ProductCardSeacrhResult } from '../ProductCard/ProductCardSearchResults';

const searchResultCardsInfo = [
  {
    id: 1,
    image: 'card-01',
    title: 'Футболка мужская Комары',
    price: '4 995 ',
    oldPrice: '9 990 ',
    discount: '30',
  },
];

export const SearchResultsCard = () => {
  return (
    <div className="search__results results-seacrh">
      <div className="results-seacrh__cards">
        {searchResultCardsInfo.map((card) => {
          const { id, image, title, price, oldPrice, discount } = card;

          return (
            <ProductCardSeacrhResult
              key={id}
              image={image}
              title={title}
              price={price}
              oldPrice={oldPrice}
              discount={discount}
            />
          );
        })}
      </div>
    </div>
  );
};
