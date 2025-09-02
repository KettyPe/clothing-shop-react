import './App.css'
import SearchIcon from './ui/icons/SearchIcon'
import CloseIcon from './ui/icons/CloseIcon'
import TelegramIcon from './ui/icons/TelegramIcon'
import TelegramCircleIcon from './ui/icons/TelegramCircleIcon'
import ArrowDownIcon from './ui/icons/ArrowDownIcon'
import MoreIcon from "./ui/icons/MoreIcon"

import HomeIcon from './ui/icons/HomeIcon'
import FavoriteIcon from './ui/icons/FavoriteIcon'
import CatalogIcon from './ui/icons/CatalogIcon'
import CartIcon from './ui/icons/CartIcon'
import AccountIcon from './ui/icons/AccountIcon'
import Button from './ui/button/Button'
import React from 'react'
import { Badge, type BadgeProps } from './ui/badge/badge'

const categoriesInfo = [
  {
    id: 1,
    image: 'accessories',
    title: "Аксессуары"
  },
  {
    id: 2,
    image: 't-shirts',
    title: "Футболки"
  },
  {
    id: 3,
    image: 'hoodies',
    title: "Толстовки"
  },
  {
    id: 4,
    image: 'jackets',
    title: "Куртки"
  },
  {
    id: 5,
    image: 'pants',
    title: "Брюки"
  },
  {
    id: 6,
    image: 'certificates',
    title: "Сертификаты"
  }
]

const footerMenuInfo = [
  {
    id: 1,
    icon: <HomeIcon />
  },
  {
    id: 2,
    icon: <CatalogIcon />
  },
  {
    id: 3,
    icon: <FavoriteIcon />
  },
  {
    id: 4,
    icon: <CartIcon />
  },
  {
    id: 5,
    icon: <AccountIcon />
  },
]

interface ProductInfo {
  id: number;
  image: string;
  title: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  badges?: BadgeProps[];
}

const productsInfo: ProductInfo[] = [
  {
    id: 1,
    image: "card-01",
    title: "Футболка мужская Комары",
    price: "4 995 ",
    oldPrice: "9 990 ",
    discount: "30",
    badges:
      [
        { variant: "hit", text: "Хит" },
        { variant: "sale", text: "sale" }
      ]
  },
  {
    id: 2,
    image: "card-02",
    title: "Свитшот женский укороченный Yamal est.2017",
    price: "2 700 ",
    oldPrice: "3 000 ",
    discount: "10",
    badges:
      [
        { variant: "premium", text: "премиум" }
      ]
  },
  {
    id: 3,
    image: "card-03",
    title: "Шапка Yamal комбинация с бумбоном",
    price: "1 550 ",
    badges:
      [
        { variant: "new", text: "new" }
      ]
  },
  {
    id: 4,
    image: "card-04",
    title: "Брелок фирменный «Созвездие»",
    price: "640 ",
    oldPrice: "800 ",
    discount: "20"
  },
  {
    id: 5,
    image: "card-05",
    title: "Шорты мужские Yamal",
    price: "3 850 "
  },
  {
    id: 6,
    image: "card-06",
    title: "Сертификат Yamal 10000",
    price: "10 000 "
  },
]

const searchResultCardsInfo = [
  {
    id: 1,
    image: "card-01",
    title: "Футболка мужская Комары",
    price: "4 995 ",
    oldPrice: "9 990 ",
    discount: "30"
  }
]

const PopularSearchesInfo = [
  {
    id: 1,
    title: "футболка"
  },
  {
    id: 2,
    title: "женская кофта"
  },
  {
    id: 3,
    title: "сертификат"
  },
  {
    id: 4,
    title: "куртка"
  },
  {
    id: 5,
    title: "детская футболка"
  },
]

function App() {
  const [activeMenu, setActiveMenu] = React.useState(0);

  return (
    <div>
      {/* header component */}
      <div className="header">
        <div className="header__container container">
          <div className="header__inner">
            <button className="header__button" type='button'>
              <CloseIcon />
              <span>Закрыть</span>
            </button>
            <a href="#" className='header__tg'>
              <TelegramCircleIcon />
              <span>наш tg-канал</span>
            </a>
            <button className="header__dropdown">
              <ArrowDownIcon />
              <MoreIcon />
            </button>
          </div>
        </div>
      </div>

      {/* search component */}
      <div className="search">
        <div className="search__container container">
          <div className="search__body">
            <div className="search__inner">
              <SearchIcon className="search__icon" />
              <input className="search__input" type="text" placeholder="Найти товары" />
            </div>
            <div className="search__result">
              <PopularSearches />
            </div>
          </div>
        </div>
      </div>

      {/* mainblock component */}
      <div className="mainblock">
        <div className="mainblock__container container">
          <div className="mainblock__image">
            <img src="images/mainblock/banner.jpg" alt="banner image" />
          </div>
        </div>
      </div>

      {/* categories component */}
      <div className="categories">
        <div className="categories__container container">
          <div className="categories__cards">
            {categoriesInfo.map((item) => {
              const { id, image, title } = item

              return (
                <CardCategories
                  key={id}
                  image={image}
                  title={title}
                />
              )
            })}
          </div>
        </div>
      </div>

      {/* Products component */}
      <div className='products'>
        <div className="products__container container">
          <div className="products__cards">
            {productsInfo.map((card) => {
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
          </div>
        </div>
      </div>

      {/* footer component */}
      <footer className="footer">
        <div className="footer__container container">

          {/* footer info */}
          <div className="footer__info">
            <p className="footer__info-title">Разработано на платформе Noxer</p>
            <a href="#" className="footer__info-btn">
              <TelegramIcon />
              <span>noxerai_bot</span>
            </a>
          </div>

          {/* footer menu */}
          <nav className="footer__menu">
            <ul className="footer__list">
              {footerMenuInfo.map((item, index) => (
                <li
                  key={item.id}
                  className={activeMenu === index ? 'active' : ''}
                  onClick={() => setActiveMenu(index)}
                >
                  <FooterMenuIcon icon={item.icon} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App

interface CardCategoriesProps {
  image: string
  title: string
}

const CardCategories = ({ image, title }: CardCategoriesProps) => {
  return (
    <div className="categories__card">
      <a href='#' className="categories__image">
        <img src={`images/categories/${image}.jpg`} alt={`${image} image`} />
      </a>
      <p className="categories__title">{title}</p>
    </div>
  )
}

const FooterMenuIcon = ({ icon }: { icon: React.ReactNode }) => {
  return <>{icon}</>
}

interface ProductCardProps {
  image: string
  title: string
  price: string
  oldPrice?: string
  discount?: string
  badges?: BadgeProps[] | undefined
}

const ProductCard = ({
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


interface ProductCardSeacrhResultProps extends ProductCardProps { }

const ProductCardSeacrhResult = ({
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
          )
        })}
      </div>
    </div>
  )
}

export const PopularSearches = () => {
  return (
    <div className="popular-searches">
      <p className="popular-searches__title">Часто ищут</p>
      <div className="popular-searches__items">
        {PopularSearchesInfo.map((item) => (
          <PopularSearchesItem key={item.id} title={item.title} />
        ))}
      </div>
    </div>
  )
}

const PopularSearchesItem = ({ title }: { title: string }) => {
  return (
    <a href="#" className="popular-searches__item">
      <SearchIcon width={10} height={10} />
      <p className="popular-searches__item-title">{title}</p>
    </a>
  )
}