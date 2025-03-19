import { BannerM, Products } from '../../models/Product'
import { MenuList } from '../../components/menuComp/MenuList'
import bannerSushi from '../../assets/images/sushi_banner.png'
import sushi from '../../assets/images/sushi.png'
import { Header } from '../../components/menuComp/Header'
import { Banner } from '../../components/menuComp/Banner'

const fundo: BannerM[] = [
  {
    id: 1,
    banner: bannerSushi,
    restaurant: 'Hioki Sushi',
    tag: 'Japonesa'
  }
]

const menu: Products[] = [
  {
    id: 1,
    image: sushi,
    title: 'Barca de Sushi',
    description:
      'A irresistível Barca de Sushi: uma seleção generosa de sushis frescos, com salmão macio, atum suculento, kani cremoso e um toque de shoyu. Sabor e harmonia em cada peça!'
  },
  {
    id: 2,
    image: sushi,
    title: 'Barca de Sushi',
    description:
      'A irresistível Barca de Sushi: uma seleção generosa de sushis frescos, com salmão macio, atum suculento, kani cremoso e um toque de shoyu. Sabor e harmonia em cada peça!'
  },
  {
    id: 3,
    image: sushi,
    title: 'Barca de Sushi',
    description:
      'A irresistível Barca de Sushi: uma seleção generosa de sushis frescos, com salmão macio, atum suculento, kani cremoso e um toque de shoyu. Sabor e harmonia em cada peça!'
  },
  {
    id: 4,
    image: sushi,
    title: 'Barca de Sushi',
    description:
      'A irresistível Barca de Sushi: uma seleção generosa de sushis frescos, com salmão macio, atum suculento, kani cremoso e um toque de shoyu. Sabor e harmonia em cada peça!'
  },
  {
    id: 5,
    image: sushi,
    title: 'Barca de Sushi',
    description:
      'A irresistível Barca de Sushi: uma seleção generosa de sushis frescos, com salmão macio, atum suculento, kani cremoso e um toque de shoyu. Sabor e harmonia em cada peça!'
  },
  {
    id: 6,
    image: sushi,
    title: 'Barca de Sushi',
    description:
      'A irresistível Barca de Sushi: uma seleção generosa de sushis frescos, com salmão macio, atum suculento, kani cremoso e um toque de shoyu. Sabor e harmonia em cada peça!'
  }
]

export const Hioki = () => (
  <>
    <Header />
    <Banner banner={fundo[0]} />
    <MenuList products={menu} />
  </>
)
