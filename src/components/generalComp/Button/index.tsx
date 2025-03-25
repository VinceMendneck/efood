import { ButtonContainer, ButtonCarrinho, ButtonSaibaMais } from './styles'
import { ButtonHTMLAttributes } from 'react'

type BtnSaibaMaisProps = {
  title: string
  to?: string
  onClick?: () => void
  children: string
  className?: string
}

type BtnCarrinhoProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string
  children: string
}

export const BtnSaibaMais = ({
  title,
  children,
  onClick,
  to,
  className
}: BtnSaibaMaisProps) => {
  return (
    <ButtonContainer>
      <ButtonSaibaMais
        to={to as string}
        onClick={onClick}
        title={title}
        className={className}
      >
        {children}
      </ButtonSaibaMais>
    </ButtonContainer>
  )
}

export const BtnCarrinho = ({
  title,
  children,
  onClick,
  className
}: BtnCarrinhoProps) => {
  return (
    <ButtonContainer>
      <ButtonCarrinho onClick={onClick} title={title} className={className}>
        {children}
      </ButtonCarrinho>
    </ButtonContainer>
  )
}
