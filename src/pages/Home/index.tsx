import RestaurantsList from '../../components/RestaurantsList'
import Restaurante from '../../models/Restaurante'
import macarrao from '../../assets/images/macarrao.png'
import japonesa from '../../assets/images/sushi.png'
import Header from '../../components/Header'

const restaurantes: Restaurante[] = [
  {
    id: 1,
    nota: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sush',
    infos: ['Destaque da Semana', 'Japonesa'],
    image: japonesa
  },
  {
    id: 2,
    nota: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: macarrao
  },
  {
    id: 3,
    nota: '4.7',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'La Dolce Vita Trattoria',
    infos: ['Japonesa'],
    image: japonesa
  },
  {
    id: 4,
    nota: '4.8',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: macarrao
  },
  {
    id: 5,
    nota: '4.6',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'La Dolce Vita Trattoria',
    infos: ['Japonesa'],
    image: japonesa
  },
  {
    id: 6,
    nota: '4.7',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: macarrao
  }
]

const Home = () => (
  <>
    <Header />
    <RestaurantsList restaurantes={restaurantes} />
  </>
)

export default Home
