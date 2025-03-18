import styled from 'styled-components'
import background from '../../../assets/images/header_background.png'
import { cores } from '../../../styles'

export const HeaderBar = styled.header`
  background-image: url(${background});
  color: ${cores.rosa};
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-bottom: 80px;
  justify-content: center;

  img {
    width: 125px;
    height: auto;
    margin: 0 auto;
    margin-bottom: 65px;
    padding-top: 40px;

    @media screen and (max-width: 1365px) {
      margin-left: 25vw;
      margin-right: 25vw;
    }
  }
`

export const HeaderLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const LinkItem = styled.li`
  text-align: center;
  margin-top: -25px;
  white-space: nowrap;

  @media screen and (max-width: 1365px) {
    white-space: normal;
  }
`

export const LinkCart = styled.a`
  color: ${cores.rosa};
  font-weight: 900;
  font-size: 18px;
  margin-top: -25px;
  white-space: nowrap;

  @media screen and (max-width: 1366px) {
    white-space: normal;
  }
`
