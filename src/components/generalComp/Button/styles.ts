import styled from 'styled-components'
import { cores, breakpoints } from '../../../styles'
import { Link } from 'react-router-dom'
import { ButtonHTMLAttributes } from 'react'

interface BtnCarrinhoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export const ButtonContainer = styled.div`
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 10px;
  }
`

export const ButtonSaibaMais = styled(Link)`
  border: 1px solid ${cores.rosa};
  color: ${cores.rosaRodape};
  background-color: ${cores.rosa};
  display: inline-block;
  padding: 4px 6px;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${cores.rosa};
    background-color: ${cores.rosaRodape};
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 2px 4px;
    font-size: 12px;
  }
`

export const ButtonCarrinho = styled.button<BtnCarrinhoProps>`
  border: 1px solid ${cores.rosaRodape};
  color: ${cores.rosa};
  background-color: ${cores.rosaRodape};
  display: block;
  width: 100%;
  padding: 4px 6px;
  box-sizing: border-box;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: ${cores.rosaRodape};
    background-color: ${cores.rosa};
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
  }
`
