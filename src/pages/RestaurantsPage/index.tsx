import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BannerM } from '../../models/Product'
import { MenuList } from '../../components/menuComp/MenuList'
import { Header } from '../../components/menuComp/Header'
import { Banner } from '../../components/menuComp/Banner'

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

export const RestaurantsPage = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurant, setRestaurant] = useState<Restaurants | null>(null)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res: Restaurants[]) => {
        const selectedRestaurant = res.find((r) => r.id === Number(id))
        setRestaurant(selectedRestaurant || null)
      })
      .catch((error) => console.error('Erro ao buscar restaurante:', error))
  }, [id])

  if (!restaurant) {
    return <div>Carregando...</div>
  }

  const fundo: BannerM[] = [
    {
      id: restaurant.id,
      banner: restaurant.capa,
      restaurant: restaurant.titulo,
      tag: restaurant.tipo
    }
  ]

  return (
    <>
      <Header />
      <Banner banner={fundo[0]} />
      <MenuList restaurants={[restaurant]} />
    </>
  )
}
