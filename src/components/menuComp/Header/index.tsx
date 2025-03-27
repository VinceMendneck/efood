import { HeaderBar, HeaderLinks, LinkCart, LinkItem } from './styles'
import logo from '../../../assets/images/logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../../store/reducers/cart'
import { RootReducer } from '../../../store'

export const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => {
    if (items.length === 0) {
      alert('Seu carrinho está vazio!')
    } else {
      dispatch(open())
    }
  }
  return (
    <HeaderBar>
      <div className="container">
        <nav>
          <HeaderLinks>
            <LinkItem>
              <LinkCart href="/">Restaurantes</LinkCart>
            </LinkItem>
            <LinkItem>
              <LinkCart href="/">
                <img src={logo} alt="EFOODS" />
              </LinkCart>
            </LinkItem>
            <LinkItem>
              <LinkCart onClick={openCart}>
                {items.length} produto(s) no carrinho
              </LinkCart>
            </LinkItem>
          </HeaderLinks>
        </nav>
      </div>
    </HeaderBar>
  )
}
