import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { BtnCarrinho } from '../../generalComp/Button'
import {
  CartContainer,
  CartItem,
  Overlay,
  Sidebar,
  Valor,
  CartList
} from './styles'
import { RootReducer } from '../../../store'
import { close, remove } from '../../../store/reducers/cart'

export const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  useEffect(() => {
    if (items.length === 0 && isOpen) {
      dispatch(close())
    }
  }, [items.length, isOpen, dispatch])

  const totalValue = items.reduce((acc, item) => acc + item.preco, 0)

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length === 0 ? (
          <p>Carrinho vazio</p>
        ) : (
          <>
            <CartList>
              {' '}
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>R$ {item.preco.toFixed(2)}</span>
                    <button type="button" onClick={() => removeItem(item.id)} />
                  </div>
                </CartItem>
              ))}
            </CartList>
            <Valor>
              <p>Valor total</p>
              <p>R$ {totalValue.toFixed(2)}</p>
            </Valor>
            <BtnCarrinho title="Continuar">
              {'Continuar com a entrega'}
            </BtnCarrinho>
          </>
        )}
      </Sidebar>
    </CartContainer>
  )
}
