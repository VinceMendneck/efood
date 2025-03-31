import { Menu } from '../Menu'
import { Container, List } from './styles'

export const MenuList = ({ restaurants }: Props) => (
  <Container>
    <List>
      {restaurants.map((restaurant) =>
        restaurant.cardapio.map((item) => (
          <Menu
            key={item.id}
            image={item.foto}
            title={item.nome}
            description={item.descricao}
            portion={item.porcao}
            preco={item.preco}
            id={item.id}
          />
        ))
      )}
    </List>
  </Container>
)
