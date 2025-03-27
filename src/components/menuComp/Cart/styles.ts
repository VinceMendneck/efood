import styled from 'styled-components'
import { cores } from '../../../styles'
import lixo from '../../../assets/images/lixeira-de-reciclagem.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
  cursor: pointer;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.rosa};
  z-index: 1;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column; // Garante que os elementos dentro do Sidebar sejam empilhados verticalmente
  height: 100%; // Faz o Sidebar ocupar toda a altura disponível

  p {
    color: ${cores.rosaRodape};
    font-weight: 700;
    font-size: 14px;
  }
`

export const CartList = styled.ul`
  max-height: calc(100% - 100px);
  overflow-y: auto;
  margin: 0;
  padding: 0;
`

export const Valor = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 32px;

  p {
    color: ${cores.rosaRodape};
    font-weight: 700;
    font-size: 14px;
  }
`

export const CartItem = styled.li`
  background-color: ${cores.rosaRodape};
  display: flex;
  margin-bottom: 16px;
  padding: 8px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  div {
    h3 {
      font-weight: 900;
      font-size: 18px;
      margin-bottom: 16px;
      color: ${cores.rosa};
    }

    span {
      font-weight: 400;
      font-size: 14px;
      color: ${cores.rosa};
      display: block;
    }

    button {
      background-image: url(${lixo});
      width: 16px;
      height: 16px;
      position: absolute;
      bottom: 0;
      right: 0;
      margin-bottom: 8px;
      margin-right: 8px;
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  }
`
