import type { BadgeProps } from "../../ui/badge/badge"

export interface ProductCardProps {
  image: string
  title: string
  price: string
  oldPrice?: string
  discount?: string
  badges?: BadgeProps[]
}