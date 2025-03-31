import styled from 'styled-components'
import background from '../../../assets/images/header_background.png'
import { breakpoints, cores } from '../../../styles'

export const HeaderBar = styled.header`
  background-image: url(${background});
  color: ${cores.rosa};
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-bottom: 80px;
  justify-content: center;
  position: relative;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 20px 0;
  }

  img {
    width: 125px;
    height: auto;
    margin: 0 auto;
    margin-bottom: 65px;
    padding-top: 40px;

    @media (max-width: ${breakpoints.desktop}) {
      margin-left: 10vw;
      margin-right: 10vw;
      width: 100px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      margin-left: 5vw;
      margin-right: 5vw;
      width: 80px;
    }
  }
`

export const HeaderLinks = styled.ul`
  display: flex;
  align-items: center;
  max-width: 1024px;
  width: 100%;
  padding: 0;

  > *:nth-child(1) {
    flex: 1;
    display: flex;
    justify-content: flex-start;
  }

  > *:nth-child(2) {
    flex: 0 0 auto;
    text-align: center;
  }

  > *:nth-child(3) {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  img {
    width: 125px;
    height: auto;
    padding-top: 40px;
    margin-bottom: 65px;

    @media (max-width: ${breakpoints.desktop}) {
      width: 100px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      width: 80px;
      margin-bottom: 30px;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding: 0 10px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;

    > *:nth-child(1),
    > *:nth-child(3) {
      margin: 0;
      flex: none;
      justify-content: center;
      width: 100%;
    }
  }
`

export const LinkItem = styled.li`
  text-align: center;
  margin-top: 10px;

  @media (max-width: ${breakpoints.desktop}) {
    margin: -10px 3px 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 5px 0;
  }
`

export const LinkCart = styled.a`
  color: ${cores.rosa};
  font-weight: 900;
  font-size: 18px;
  margin-top: -25px;
  white-space: nowrap;
  cursor: pointer;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 16px;
    margin-top: -15px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
    margin-top: 5px;
  }
`
