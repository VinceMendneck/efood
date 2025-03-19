import { Products } from '../../../models/Product'
import { Menu } from '../Menu'
import { Container, List } from './styles'

export type Props = {
  products: Products[]
}

export const MenuList = ({ products }: Props) => (
  <Container>
    <List>
      {products.map((product) => (
        <Menu
          image={product.image}
          title={product.title}
          description={product.description}
          key={product.id}
        />
      ))}
    </List>
  </Container>
)
