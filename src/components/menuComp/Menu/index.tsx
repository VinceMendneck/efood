import { BtnCarrinho } from '../../generalComp/Button'
import { CardMenu, DescricaoMenu, TituloMenu } from './styles'

type Props = {
  image: string
  title: string
  description: string
}

export const Menu = ({ image, title, description }: Props) => (
  <CardMenu>
    <img src={image} alt={title} />
    <TituloMenu>{title}</TituloMenu>
    <DescricaoMenu>{description}</DescricaoMenu>
    <BtnCarrinho title={'carrinho'}>{'Adicionar ao carrinho'}</BtnCarrinho>
  </CardMenu>
)
