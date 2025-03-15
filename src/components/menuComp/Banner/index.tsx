import { Imagem, TagType, Titulo } from './styles'
import banner from '../../../assets/images/banner_macarrao.png'

export const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <TagType>Italiana</TagType>
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </div>
  </Imagem>
)
