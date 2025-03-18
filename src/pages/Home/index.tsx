import { Hero } from '../../components/homeComp/Hero'
import { RestaurantsList } from '../../components/homeComp/RestaurantsList'
import { Restaurants } from '../../models/Restaurant'
import macarrao from '../../assets/images/macarrao.png'
import sushi from '../../assets/images/sushi.png'

const restaurantes: Restaurants[] = [
  {
    id: 1,
    image: sushi,
    title: 'Hioki Sushi',
    rate: 4.9,
    type: 'Japonesa',
    infos: ['Destaque da semana'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    link: '/hioki'
  },
  {
    id: 2,
    image: macarrao,
    title: 'La Dolce Vita Trattoria',
    rate: 4.6,
    type: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: '/ladolce'
  },
  {
    id: 3,
    image: macarrao,
    title: 'La Dolce Vita Trattoria',
    rate: 4.6,
    type: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: '/ladolce'
  },
  {
    id: 4,
    image: macarrao,
    title: 'La Dolce Vita Trattoria',
    rate: 4.6,
    type: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: '/ladolce'
  },
  {
    id: 5,
    image: macarrao,
    title: 'La Dolce Vita Trattoria',
    rate: 4.6,
    type: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: '/ladolce'
  },
  {
    id: 6,
    image: macarrao,
    title: 'La Dolce Vita Trattoria',
    rate: 4.6,
    type: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: '/ladolce'
  }
]

export const Home = () => (
  <>
    <Hero />
    <RestaurantsList restaurants={restaurantes} />
  </>
)
