import styled from 'styled-components'
import { cores } from '../../../styles'

export const TagContainer = styled.div`
  background-color: ${cores.rosa};
  color: ${cores.rosaRodape};
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  padding: 4px 6px;
  display: inline-block;

  &:first-letter {
    text-transform: capitalize;
  }
`
