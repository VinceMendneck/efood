import { Hero } from '../../components/homeComp/Hero'
import { RestaurantsList } from '../../components/homeComp/RestaurantsList'
import { useEffect, useState } from 'react'

export type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

export const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])
  return (
    <>
      <Hero />
      <RestaurantsList restaurants={restaurantes} />
    </>
  )
}
