import { Restaurant } from '../Restaurant'
import { Container, List } from './styles'
import { Restaurants } from '../../../models/Restaurant'

export type Props = {
  restaurants: Restaurants[]
}

export const RestaurantsList = ({ restaurants }: Props) => (
  <Container>
    <List>
      {restaurants.map((restaurant) => (
        <Restaurant
          image={restaurant.image}
          title={restaurant.title}
          infos={restaurant.infos}
          rate={restaurant.rate}
          type={restaurant.type}
          description={restaurant.description}
          link={restaurant.link}
          key={restaurant.id}
        />
      ))}
    </List>
  </Container>
)
