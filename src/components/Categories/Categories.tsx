import React, { useEffect, useState } from "react";
import "./style.css"


interface Category {
     Category_ID: number;
     Category_Image: string;
     Category_Name: string;
     sort_order: number;
}

interface CardCategoriesProps {
     image: string
     title: string
     name: string
}

export const Categories = () => {
     const [categories, setCategories] = useState<Category[]>([])
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState<string | null>(null);

     useEffect(() => {
          const fetchCategories = async () => {
               try {
                    const response = await fetch('https://noxer-test.ru/webapp/api/products?on_main=true')
                    if (!response.ok) throw new Error("Ошибка при загрузке категорий")
                    const data = await response.json()
                    setCategories(data.categories)
               } catch (err) {
                    setError((err as Error).message)
               } finally {
                    setLoading(false)
               }
          }

          fetchCategories()
     }, [])

     if (loading) return <p>Загрузка категорий...</p>
     if (error) return <p>Ошибка: {error}</p>

     return (
          <div className="categories">
               <div className="categories__container container">
                    <div className="categories__cards">
                         {categories
                         .sort((a, b) => a.sort_order - b.sort_order)
                         .map((item) => {
                              const { Category_ID, Category_Image, Category_Name } = item

                              return (
                                   <CardCategories
                                        key={Category_ID}
                                        image={Category_Image}
                                        title={Category_Name}
                                        name={Category_Name}
                                   />
                              )
                         })}
                    </div>
               </div>
          </div>
     )
}

const CardCategories = ({ image, title, name}: CardCategoriesProps) => {
     return (
          <div className="categories__card">
               <a href='#' className="categories__image">
                    <img
                         src={image || `images/categories/pants.jpg`}
                         alt={`${name} image`}
                    />
               </a>
               <p className="categories__title">{title}</p>
          </div>
     )
}