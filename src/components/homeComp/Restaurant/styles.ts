import styled from 'styled-components'
import { cores } from '../../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  width: 472px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 16px;
  padding-left: 8px;
  padding-right: 8px;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    margin-top: -2px;
    width: 21px;
    height: 21px;
  }
`

export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 18px;
  color: ${cores.rosa};
  margin: 0;
`

export const Descricao = styled.p`
  color: ${cores.rosa};
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  padding: 16px 1px;
  display: block;
  margin-left: 8px;
  margin-right: 8px;
`

export const Infos = styled.div`
  margin-top: 16px;
  margin-right: 8px;
  position: absolute;
  top: 0;
  right: 0;
`
export const Btn = styled.div`
  margin-bottom: 8px;
  margin-left: 8px;
`
export const CardImg = styled.div`
  img {
    margin-bottom: -11px;
  }
`
export const Content = styled.div`
  padding-top: 10px;
  border: 1px solid ${cores.rosa};
  border-top: 0;
`
