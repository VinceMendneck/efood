import { HeaderBar, HeaderLinks, LinkCart, LinkItem } from './styles'
import logo from '../../../assets/images/logo.svg'

export const Header = () => (
  <HeaderBar>
    <div className="container">
      <nav>
        <HeaderLinks>
          <LinkItem>
            <LinkCart href="#">Restaurantes</LinkCart>
          </LinkItem>
          <img src={logo} alt="EFOODS" />
          <LinkItem>
            <LinkCart href="#">0 produto(s) no carrinho</LinkCart>
          </LinkItem>
        </HeaderLinks>
      </nav>
    </div>
  </HeaderBar>
)
