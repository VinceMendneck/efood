import styled from 'styled-components'
import { cores, breakpoints } from '../../../styles'

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

export const CheckoutContainer = styled.div`
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

  form {
    margin-bottom: 24px;

    input {
      border: none;
      background-color: ${cores.rosaRodape};
      color: ${cores.rosa};
      display: flex;
      width: 100%;
      margin: 8px 0;
      padding: 5px;
      border: 1px solid ${cores.rosaRodape};
    }

    input:focus {
      outline: none;
      font-weight: 700;
    }
    input.invalid {
      border: 1px solid red;
    }

    label {
      font-size: 14px;
      font-weight: 700;
      @media (max-width: ${breakpoints.tablet}) {
        font-size: 12px;
      }
    }
  }

  button {
    margin-bottom: 8px;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.rosa};
  z-index: 1;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  color: ${cores.rosaRodape};

  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 14px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 280px;
  }
`

export const InlineFields = styled.div`
  display: flex;
  gap: 24px;

  div {
    flex: 1;
  }

  label {
    display: block;
    font-size: 14px;
    font-weight: 700;
  }

  input {
    border: none;
    background-color: ${cores.rosaRodape};
    color: ${cores.rosa};
    width: 100%;
    margin: 8px 0;
    padding: 5px;
  }

  input:focus {
    outline: none;
    font-weight: 700;
  }
`
