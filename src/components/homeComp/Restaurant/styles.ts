import styled from 'styled-components'
import { breakpoints, cores } from '../../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  width: 472px;
  position: relative;
  display: flex;
  flex-direction: column;

  img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    max-width: 280px;
    margin: 0 8px;

    img {
      height: 140px;
    }
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Content = styled.div`
  padding-top: 10px;
  border: 1px solid ${cores.rosa};
  background-color: ${cores.branco};
  border-top: 0;
  min-height: 234px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;

  @media (max-width: ${breakpoints.tablet}) {
    min-height: 160px;
    padding: 4px;
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

  @media (max-width: ${breakpoints.tablet}) {
    padding: 4px 2px;
    margin-bottom: 12px;
  }
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

  @media (max-width: ${breakpoints.tablet}) {
    gap: 2px;

    img {
      width: 14px;
      height: 14px;
    }
  }
`

export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 18px;
  color: ${cores.rosa};
  margin: 0;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 13px;
  }
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

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 10px;
    line-height: 14px;
    padding: 8px 2px;
    margin: 0 2px;
  }
`

export const Infos = styled.div`
  margin-top: 16px;
  margin-right: 8px;
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 4px;
    margin-right: 2px;
  }
`

export const Btn = styled.div`
  margin-left: 8px;
  margin-bottom: 8px;
  align-self: flex-start;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 2px;
    margin-bottom: 2px;
  }
`

export const CardImg = styled.div`
  img {
    margin-bottom: -11px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    img {
      margin-bottom: -4px;
    }
  }
`
