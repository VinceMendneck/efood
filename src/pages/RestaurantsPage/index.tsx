import { useParams } from 'react-router-dom'
import { BannerM } from '../../models/Product'
import { MenuList } from '../../components/menuComp/MenuList'
import { Header } from '../../components/menuComp/Header'
import { Banner } from '../../components/menuComp/Banner'
import { useGetRestaurantByIdQuery } from '../../services/api'
import { Cart } from '../../components/menuComp/Cart'
import { Checkout } from '../../components/menuComp/Checkout'
import { Payment } from '../../components/menuComp/Payment'

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
  const { data: restaurant, isLoading } = useGetRestaurantByIdQuery(
    id as string,
    {
      skip: !id
    }
  )

  if (isLoading) {
    return <div>Carregando...</div>
  }

  if (!restaurant) {
    return <div>Restaurante não encontrado</div>
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
      <Cart />
      <Checkout />
      <Payment />
    </>
  )
}
