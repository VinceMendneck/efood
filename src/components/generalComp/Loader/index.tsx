import { FadeLoader } from 'react-spinners'
import { Container } from './styles'
import { cores } from '../../../styles'

export const Loader = () => (
  <Container>
    <FadeLoader color={cores.rosa} />
  </Container>
)
