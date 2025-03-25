import { useState } from 'react'
import { BtnCarrinho } from '../../generalComp/Button'
import { CardMenu, DescricaoMenu, TituloMenu } from './styles'
import { Modal } from '../Modal'

export type Props = {
  image: string
  title: string
  description: string
  portion: string
  preco: number
  id: number
}

export const Menu = ({
  image,
  title,
  description,
  portion,
  preco,
  id
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getDescricao = (description: string) => {
    if (description.length > 138) {
      return description.slice(0, 135) + '...'
    }
    return description
  }

  return (
    <CardMenu>
      <img src={image} alt={title} />
      <TituloMenu>{title}</TituloMenu>
      <DescricaoMenu>{getDescricao(description)}</DescricaoMenu>
      <BtnCarrinho title="detalhes" onClick={() => setIsModalOpen(true)}>
        {'Mais detalhes'}
      </BtnCarrinho>
      {isModalOpen && (
        <Modal
          image={image}
          title={title}
          description={description}
          portion={portion}
          preco={preco}
          id={id}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </CardMenu>
  )
}
