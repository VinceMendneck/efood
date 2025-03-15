import { HeroBar, HeroText } from './styles'
import logo from '../../../assets/images/logo.svg'

export const Hero = () => (
  <HeroBar>
    <img src={logo} alt="EFOODS" />
    <HeroText>
      Viva experiências gastronômicas
      <br />
      no conforto da sua casa
    </HeroText>
  </HeroBar>
)
