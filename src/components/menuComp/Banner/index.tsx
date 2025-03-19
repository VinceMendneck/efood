import { BannerM } from '../../../models/Product'
import { Imagem, TagType, Titulo } from './styles'

type Props = {
  banner: BannerM
}

export const Banner = ({ banner }: Props) => (
  <Imagem style={{ backgroundImage: `url(${banner.banner})` }}>
    <div className="container">
      <TagType>{banner.tag}</TagType>
      <Titulo>{banner.restaurant}</Titulo>
    </div>
  </Imagem>
)
