import styled from 'styled-components'
import { cores } from '../../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.div`
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
`

export const ButtonSaibaMais = styled(Link)`
  border: 1px solid ${cores.rosa};
  color: ${cores.rosaRodape};
  background-color: ${cores.rosa};
  display: inline-block;
  padding: 4px 6px 3px 6px;
  align-items: center;
  text-decoration: none;

  &:hover {
    color: ${cores.rosa};
    background-color: ${cores.rosaRodape};
  }
`
export const ButtonCarrinho = styled.button`
  border: 1px solid ${cores.rosaRodape};
  color: ${cores.rosa};
  background-color: ${cores.rosaRodape};
  display: block;
  padding: 4px 6px;
  justify-content: center;
  align-items: center

  &:hover {
    color: ${cores.rosaRodape};
    background-color: ${cores.rosa};
  }
`
