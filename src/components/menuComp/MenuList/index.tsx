import { Menu } from '../Menu'

type Props = {
  title: string
}

export const MenuList = () => (
  <div>
    <ul>
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
    </ul>
  </div>
)
