import styled from 'styled-components'
import { breakpoints } from '../../../styles'

export const Container = styled.section`
  padding: 56px 0;
  margin: 0 auto;
  max-width: 1024px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
    max-width: 820px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  justify-items: center;
  align-items: center;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    justify-content: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`
