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
  type: string
  infos?: string[]
  rate: number
  description: string
  link: string
}

export const Restaurant = ({
  image,
  title,
  infos = [],
  rate,
  type,
  description,
  link
}: Props) => (
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
        {infos.map((info) => (
          <Tag key={info}>
            <span>{info}</span>
          </Tag>
        ))}
        <Tag>
          <span>{type}</span>
        </Tag>
      </Infos>
      <Descricao>{description}</Descricao>
      <Btn>
        <BtnSaibaMais to={link} title={title}>
          {'Saiba mais'}
        </BtnSaibaMais>
      </Btn>
    </Content>
  </Card>
)
