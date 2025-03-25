import styled from 'styled-components'
import { cores } from '../../../styles'

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

  .container {
    z-index: 1;
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
`

export const Titulo = styled.h2`
  font-weight: 900;
  padding-top: 156px;
`
export const TagType = styled.h3`
  font-weight: 100;
  padding-top: 25px;
  text-transform: capitalize;
`
