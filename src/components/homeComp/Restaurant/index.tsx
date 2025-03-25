import { Tag } from '../Tag'
import estrela from '../../../assets/images/estrela.png'
import { BtnSaibaMais } from '../../generalComp/Button'
import {
  Card,
  Descricao,
  Infos,
  Titulo,
  Profile,
  Rating,
  Btn,
  CardImg,
  Content
} from './styles'

type Props = {
  image: string
  title: string
  infos: boolean
  rate: number
  type: string
  description: string
  id: number
}

export const Restaurant = ({
  image,
  title,
  infos,
  rate,
  type,
  description,
  id
}: Props) => {
  const getDescricao = (description: string) => {
    if (description.length > 321) {
      return description.slice(0, 318) + '...'
    }
    return description
  }
  return (
    <Card>
      <CardImg>
        <img src={image} alt={title} />
      </CardImg>
      <Content>
        <Profile>
          <Titulo>{title}</Titulo>
          <Rating>
            <Titulo>
              <span>{rate}</span>
            </Titulo>
            <img src={estrela} alt="Estrela" />
          </Rating>
        </Profile>
        <Infos>
          {infos && (
            <Tag>
              <span>Destaque da semana</span>
            </Tag>
          )}
          <Tag>
            <span>{type}</span>
          </Tag>
        </Infos>
        <Descricao>{getDescricao(description)}</Descricao>
        <Btn>
          <BtnSaibaMais to={`restaurante/${id}`} title={title}>
            {'Saiba mais'}
          </BtnSaibaMais>
        </Btn>
      </Content>
    </Card>
  )
}
