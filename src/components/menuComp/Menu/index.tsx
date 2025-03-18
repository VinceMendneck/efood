import pizza from '../../../assets/images/pizza.png'
import { BtnCarrinho } from '../../generalComp/Button'
import { CardMenu, DescricaoMenu, TituloMenu } from './styles'

export const Menu = () => (
  <CardMenu>
    <img src={pizza} alt="Pizza Marguerita" />
    <TituloMenu>Pizza Marguerita</TituloMenu>
    <DescricaoMenu>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </DescricaoMenu>
    <BtnCarrinho title={'carrinho'}>{'Adicionar ao carrinho'}</BtnCarrinho>
  </CardMenu>
)
