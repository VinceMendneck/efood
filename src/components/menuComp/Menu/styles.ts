import styled from 'styled-components'
import { breakpoints, cores } from '../../../styles'

export const CardMenu = styled.div`
  background-color: ${cores.rosa};
  color: ${cores.rosaRodape};
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  height: 100%;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
    border-radius: 8px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
  }
`

export const TituloMenu = styled.h3`
  font-weight: 900;
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
  display: block;
`

export const DescricaoMenu = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

export const ButtonCarrinho = styled.button`
  border: 1px solid ${cores.rosaRodape};
  color: ${cores.rosa};
  background-color: ${cores.rosaRodape};
  display: block;
  width: 100%;
  padding: 4px 0;
  box-sizing: border-box;
  text-align: center;
  font-weight: 700;
  font-size: 14px;

  &:hover {
    color: ${cores.rosaRodape};
    background-color: ${cores.rosa};
  }
`
