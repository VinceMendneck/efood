import { ButtonContainer, ButtonCarrinho, ButtonSaibaMais } from './styles'

type Props = {
  title: string
  to?: string
  onClick?: () => void
  children: string
}

export const BtnSaibaMais = ({ title, children, onClick, to }: Props) => {
  return (
    <ButtonContainer>
      <ButtonSaibaMais to={to as string} onClick={onClick} title={title}>
        {children}
      </ButtonSaibaMais>
    </ButtonContainer>
  )
}

export const BtnCarrinho = ({ title, children, onClick }: Props) => {
  return (
    <ButtonContainer>
      <ButtonCarrinho onClick={onClick} title={title}>
        {children}
      </ButtonCarrinho>
    </ButtonContainer>
  )
}
