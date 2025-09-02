import "./style.css"

interface CardCategoriesProps {
     image: string
     title: string
}

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

export const Categories = () => {
     return (
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
     )
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