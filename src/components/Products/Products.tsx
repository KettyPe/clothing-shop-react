import "./style.css"
import type { BadgeProps } from "../../ui/badge/badge";
import { ProductCard } from "../ProductCard/ProductCard";

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

export const Products = () => {
     return (
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
     )
}