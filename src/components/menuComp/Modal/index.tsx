import { BtnCarrinho } from '../../generalComp/Button'
import { DescricaoMenu, TituloMenu } from '../Menu/styles'
import { Props } from '../Menu'
import close from '../../../assets/images/close.png'
import {
  ModalA,
  ModalB,
  ModalContent,
  ImageContainer,
  DetailsContainer
} from './styles'

type ModalProps = Props & {
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
  image,
  title,
  description,
  portion,
  preco,
  onClose
}: ModalProps) => (
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
            title="carrinho"
            onClick={() => console.log('Adicionado ao carrinho')}
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
