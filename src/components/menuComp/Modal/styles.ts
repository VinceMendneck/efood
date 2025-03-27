import { styled } from 'styled-components'
import { cores, breakpoints } from '../../../styles'

export const ModalA = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.isVisible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: ${breakpoints.tablet}) {
    align-items: flex-start;
    padding: 20px;
  }
`

export const ModalB = styled.div`
  z-index: 2;
  max-width: 1024px;
  width: 90%;
  height: 344px;
  background-color: ${cores.rosa};
  position: relative;
  opacity: 0;
  transition: opacity 0.5s ease;

  &.container {
    opacity: 1;
  }

  .close-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
    cursor: pointer;

    @media (max-width: ${breakpoints.tablet}) {
      top: 2px;
      right: 2px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 95%;
    height: auto;
    max-height: 80vh;
    overflow-y: auto;
  }
`

export const ModalContent = styled.div`
  display: flex;
  height: 100%;
  padding: 32px;
  gap: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 16px;
    gap: 16px;
  }
`

export const ImageContainer = styled.div`
  width: 280px;
  height: 280px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: 200px;
  }
`

export const DetailsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: ${cores.rosaRodape};
  justify-content: flex-start;

  .add-to-cart-btn {
    display: inline-block !important;
    width: auto !important;
    margin-top: 16px;
    margin-bottom: 20px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`
