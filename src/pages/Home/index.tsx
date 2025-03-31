import { Loader } from '../../components/generalComp/Loader'
import { Hero } from '../../components/homeComp/Hero'
import { RestaurantsList } from '../../components/homeComp/RestaurantsList'
import { useGetRestaurantsQuery } from '../../services/api'

export const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantsQuery()

  if (isLoading) {
    return <Loader />
  }

  if (!restaurantes) {
    return <div>Nenhum restaurante encontrado</div>
  }

  return (
    <>
      <Hero />
      <RestaurantsList restaurants={restaurantes} />
    </>
  )
}
