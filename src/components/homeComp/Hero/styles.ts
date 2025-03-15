import styled from 'styled-components'
import background from '../../../assets/images/header_background.png'
import { cores } from '../../../styles'

export const HeroBar = styled.header`
  background-image: url(${background});
  color: ${cores.rosa};
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 80px;

  img {
    width: 125px;
    height: auto;
    margin: 0 auto;
    margin-bottom: 138px;
    padding-top: 40px;
  }
`
export const HeroText = styled.p`
  font-weight: 900;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0%;
  margin-bottom: 40px;
  max-width: 1366px;
`
