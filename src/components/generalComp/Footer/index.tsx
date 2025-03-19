import logo from '../../../assets/images/logo.svg'
import redes from '../../../assets/images/redes_sociais.png'
import { Container, Disclaimer, Logo, Redes } from './styles'

export const Footer = () => (
  <Container>
    <div className="container">
      <Logo>
        <a href="/">
          <img src={logo} alt="eFood" />
        </a>
      </Logo>
      <Redes>
        <a href="#">
          <img src={redes} alt="Redes Sociais" />
        </a>
      </Redes>
      <Disclaimer>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade
        <br />
        dos produtos é toda do estabelecimento contratado.
      </Disclaimer>
    </div>
  </Container>
)
