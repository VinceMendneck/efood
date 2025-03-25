import { Restaurants } from '../../../pages/Home'
import { Menu } from '../Menu'
import { Container, List } from './styles'

export type Props = {
  restaurants: Restaurants[]
}

export const MenuList = ({ restaurants }: Props) => (
  <Container>
    <List>
      {restaurants.map((restaurant) =>
        restaurant.cardapio.map((item) => (
          <>
            <Menu
              image={item.foto}
              title={item.nome}
              description={item.descricao}
              portion={item.porcao}
              preco={item.preco}
              key={item.id}
              id={item.id}
            />
          </>
        ))
      )}
    </List>
  </Container>
)
