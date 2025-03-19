import styled from 'styled-components'
import { cores } from '../../../styles'

export const CardMenu = styled.div`
  background-color: ${cores.rosa};
  color: ${cores.rosaRodape};
  padding: 8px;
  width: 320px;
  height: 338px;
  box-sizing: border-box;
  display: flex; /* Transforma o card em um contêiner flex */
  flex-direction: column; /* Alinha os filhos verticalmente */

  img {
    max-width: 100%;
    height: auto;
  }
`

export const TituloMenu = styled.h3`
  font-weight: 900;
  font-size: 16px;
  margin-top: 8px; /* Respeita o padding do topo */
  margin-bottom: 8px;
  display: block;
`

export const DescricaoMenu = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  flex-grow: 1; /* Faz a descrição ocupar o espaço disponível e se centralizar */
  display: flex;
  align-items: center; /* Centraliza o texto verticalmente no espaço disponível */
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
