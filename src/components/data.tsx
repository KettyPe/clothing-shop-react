import HomeIcon from "../ui/icons/HomeIcon"
import CatalogIcon from "../ui/icons/CatalogIcon"
import FavoriteIcon from "../ui/icons/FavoriteIcon"
import CartIcon from "../ui/icons/CartIcon"
import AccountIcon from "../ui/icons/AccountIcon"
import type { Products } from "./Products/Products"

export const footerMenuInfo = [
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


export const products: Products[] = [
  {
    id: 1,
    image: "card-01",
    title: "Футболка мужская Комары",
    price: "4 995 ",
    oldPrice: "9 990 ",
    discount: "30",
    badges: [
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
    badges: [
      { variant: "premium", text: "премиум" }
    ]
  },
  {
    id: 3,
    image: "card-03",
    title: "Шапка Yamal комбинация с бумбоном",
    price: "1 550 ",
    badges: [
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
  {
    id: 7,
    image: "card-01",
    title: "Кепка летняя Yamal",
    price: "1 200 ",
    oldPrice: "1 500 ",
    discount: "20",
    badges: [{ variant: "hit", text: "Хит" }]
  },
  {
    id: 8,
    image: "card-02",
    title: "Поло мужское с логотипом",
    price: "3 400 ",
    badges: [{ variant: "new", text: "new" }]
  },
  {
    id: 9,
    image: "card-03",
    title: "Футболка женская белая",
    price: "2 100 ",
    oldPrice: "2 800 ",
    discount: "25"
  },
  {
    id: 10,
    image: "card-04",
    title: "Толстовка мужская черная",
    price: "5 900 ",
    badges: [{ variant: "premium", text: "премиум" }]
  },
  {
    id: 11,
    image: "card-05",
    title: "Носки спортивные Yamal",
    price: "490 "
  },
  {
    id: 12,
    image: "card-06",
    title: "Рюкзак городской Yamal",
    price: "7 800 ",
    oldPrice: "8 500 ",
    discount: "10",
    badges: [{ variant: "sale", text: "sale" }]
  },
  {
    id: 13,
    image: "card-01",
    title: "Шарф фирменный",
    price: "1 750 ",
    badges: [{ variant: "new", text: "new" }]
  },
  {
    id: 14,
    image: "card-02",
    title: "Сумка через плечо",
    price: "3 200 ",
    oldPrice: "4 000 ",
    discount: "20"
  },
  {
    id: 15,
    image: "card-03",
    title: "Футболка мужская синяя",
    price: "2 900 ",
    badges: [{ variant: "hit", text: "Хит" }]
  },
  {
    id: 16,
    image: "card-04",
    title: "Толстовка женская белая",
    price: "5 100 ",
    oldPrice: "6 000 ",
    discount: "15"
  },
  {
    id: 17,
    image: "card-05",
    title: "Кружка фирменная",
    price: "890 "
  },
  {
    id: 18,
    image: "card-06",
    title: "Бутылка спортивная",
    price: "1 450 ",
    badges: [{ variant: "new", text: "new" }]
  },
  {
    id: 19,
    image: "card-01",
    title: "Сертификат Yamal 5000",
    price: "5 000 "
  },
  {
    id: 20,
    image: "card-02",
    title: "Футболка женская oversize",
    price: "3 300 ",
    oldPrice: "3 900 ",
    discount: "15"
  },
  {
    id: 21,
    image: "card-03",
    title: "Худи унисекс черное",
    price: "6 400 ",
    badges: [{ variant: "premium", text: "премиум" }]
  },
  {
    id: 22,
    image: "card-04",
    title: "Футболка детская с логотипом",
    price: "1 800 ",
    oldPrice: "2 200 ",
    discount: "18"
  },
  {
    id: 23,
    image: "card-05",
    title: "Бейсболка классическая",
    price: "1 350 ",
    badges: [{ variant: "hit", text: "Хит" }]
  },
  {
    id: 24,
    image: "card-06",
    title: "Пижама женская Yamal",
    price: "4 200 "
  },
  {
    id: 25,
    image: "card-01",
    title: "Пуховик мужской Yamal",
    price: "18 500 ",
    oldPrice: "20 000 ",
    discount: "8"
  },
  {
    id: 26,
    image: "card-02",
    title: "Свитер шерстяной фирменный",
    price: "7 900 ",
    badges: [{ variant: "new", text: "new" }]
  },
  {
    id: 27,
    image: "card-03",
    title: "Шорты женские спортивные",
    price: "2 600 "
  },
  {
    id: 28,
    image: "card-04",
    title: "Футболка мужская базовая",
    price: "2 100 ",
    oldPrice: "2 500 ",
    discount: "16"
  },
  {
    id: 29,
    image: "card-05",
    title: "Толстовка унисекс синяя",
    price: "6 800 ",
    badges: [{ variant: "sale", text: "sale" }]
  },
  {
    id: 30,
    image: "card-06",
    title: "Сумка-рюкзак Yamal",
    price: "9 500 ",
    oldPrice: "11 000 ",
    discount: "14"
  },
  {
    id: 31,
    image: "card-01",
    title: "Куртка ветровка мужская",
    price: "12 300 ",
    badges: [{ variant: "premium", text: "премиум" }]
  },
  {
    id: 32,
    image: "card-02",
    title: "Шлепанцы фирменные",
    price: "1 950 ",
    oldPrice: "2 200 ",
    discount: "11"
  },
  {
    id: 33,
    image: "card-03",
    title: "Футболка детская цветная",
    price: "1 600 ",
    badges: [{ variant: "new", text: "new" }]
  },
  {
    id: 34,
    image: "card-04",
    title: "Жилет утепленный",
    price: "6 700 ",
    oldPrice: "7 400 ",
    discount: "10"
  },
  {
    id: 35,
    image: "card-05",
    title: "Куртка зимняя женская",
    price: "15 800 ",
    badges: [{ variant: "hit", text: "Хит" }]
  }
];


export const categoriesInfo = [
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