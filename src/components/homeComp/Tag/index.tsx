import { TagContainer } from './styles'

type Props = {
  children: JSX.Element
}

export const Tag = ({ children }: Props) => (
  <TagContainer>{children}</TagContainer>
)
