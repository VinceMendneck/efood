import styled from 'styled-components'
import { breakpoints, cores } from '../../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-top: -80px;
  display: flex;
  color: ${cores.branco};
  font-size: 32px;
  position: relative;
  align-items: center;
  @media (max-width: ${breakpoints.desktop}) {
    align-items: center;
  }
  .container {
    z-index: 1;
    @media (max-width: ${breakpoints.desktop}) {
      text-align: center;
    }
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }

  @media (max-width: ${breakpoints.desktop}) {
    height: 220px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 180px;
  }
`

export const Titulo = styled.h2`
  font-weight: 900;
  padding-top: 156px;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 28px;
    padding-top: 120px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
    padding-top: 100px;
  }
`

export const TagType = styled.h3`
  font-weight: 100;
  padding-top: 25px;
  text-transform: capitalize;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 18px;
    padding-top: 15px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
    padding-top: 10px;
  }
`
