import styled from 'styled-components'
import background from '../../../assets/images/header_background.png'
import { cores, breakpoints } from '../../../styles'

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

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 40px;

    img {
      width: 90px;
      margin-bottom: 80px;
      padding-top: 20px;
    }
  }
`

export const HeroText = styled.p`
  font-weight: 900;
  margin: 0 auto;
  font-size: 36px;
  margin-bottom: 40px;
  max-width: 1366px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 26px;
    margin-bottom: 20px;
  }
`
