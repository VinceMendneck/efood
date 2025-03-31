import { useParams } from 'react-router-dom'
import { BannerM } from '../../models/Product'
import { MenuList } from '../../components/menuComp/MenuList'
import { Header } from '../../components/menuComp/Header'
import { Banner } from '../../components/menuComp/Banner'
import { useGetRestaurantByIdQuery } from '../../services/api'
import { Cart } from '../../components/menuComp/Cart'
import { Checkout } from '../../components/menuComp/Checkout'
import { Payment } from '../../components/menuComp/Payment'
import { Loader } from '../../components/generalComp/Loader'

export const RestaurantsPage = () => {
  const { id } = useParams<{ id: string }>()
  const { data: restaurant, isLoading } = useGetRestaurantByIdQuery(
    id as string,
    {
      skip: !id
    }
  )

  if (isLoading) {
    return <Loader />
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
