import { Hero } from '../../components/homeComp/Hero'
import { RestaurantsList } from '../../components/homeComp/RestaurantsList'
import { useGetRestaurantsQuery } from '../../services/api'

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
  const { data: restaurantes, isLoading } = useGetRestaurantsQuery()

  if (isLoading) {
    return <div>Carregando...</div>
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
