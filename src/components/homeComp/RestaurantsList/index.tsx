import { Restaurants } from '../../../pages/Home'
import { Restaurant } from '../Restaurant'
import { Container, List } from './styles'

export type Props = {
  restaurants: Restaurants[]
}

export const RestaurantsList = ({ restaurants }: Props) => {
  // Ordena os restaurantes, colocando os com destacado=true primeiro
  const sortedRestaurants = [...restaurants].sort((a, b) => {
    if (a.destacado && !b.destacado) return -1
    if (!a.destacado && b.destacado) return 1
    return 0
  })

  return (
    <Container>
      <List>
        {sortedRestaurants.map((restaurant) => (
          <Restaurant
            image={restaurant.capa}
            title={restaurant.titulo}
            infos={restaurant.destacado}
            rate={restaurant.avaliacao}
            type={restaurant.tipo}
            description={restaurant.descricao}
            id={restaurant.id}
            key={restaurant.id}
          />
        ))}
      </List>
    </Container>
  )
}
