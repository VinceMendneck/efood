import { BtnCarrinho } from '../../generalComp/Button'
import { DescricaoMenu, TituloMenu } from '../Menu/styles'
import close from '../../../assets/images/close.png'
import {
  ModalA,
  ModalB,
  ModalContent,
  ImageContainer,
  DetailsContainer
} from './styles'
import { useDispatch } from 'react-redux'
import { add, open } from '../../../store/reducers/cart'

type ModalProps = {
  id: number
  image: string
  title: string
  description: string
  portion: string
  preco: number
  onClose: () => void
}

const formatPortion = (portion: string) => {
  if (portion.trim() === '1 pessoa') {
    return `Serve: ${portion}`
  }
  if (portion.includes('a') || parseInt(portion) > 1) {
    return `Serve: de ${portion}`
  }
  return `Serve: ${portion}`
}

export const Modal = ({
  id,
  image,
  title,
  description,
  portion,
  preco,
  onClose
}: ModalProps) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(
      add({
        id,
        foto: image,
        nome: title,
        descricao: description,
        porcao: portion,
        preco
      })
    )
    dispatch(open())
    onClose()
  }

  return (
    <ModalA className="isVisible">
      <ModalB className="container">
        <img src={close} alt="Fechar" className="close-btn" onClick={onClose} />
        <ModalContent>
          <ImageContainer>
            <img src={image} alt={title} />
          </ImageContainer>
          <DetailsContainer>
            <TituloMenu>{title}</TituloMenu>
            <DescricaoMenu>
              {description}
              <br />
              <br />
              {formatPortion(portion)}
            </DescricaoMenu>
            <BtnCarrinho
              title="Carrinho"
              onClick={addToCart}
              className="add-to-cart-btn"
            >
              {`Adicionar ao carrinho - R$${preco.toFixed(2)}`}
            </BtnCarrinho>
          </DetailsContainer>
        </ModalContent>
      </ModalB>
      <div className="overlay" onClick={onClose}></div>
    </ModalA>
  )
}
