import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import resident from '../../assets/images/macarrao.png'
import diablo from '../../assets/images/macarrao.png'
import zelda from '../../assets/images/macarrao.png'
import starWars from '../../assets/images/macarrao.png'

const promocoes: Game[] = [
  {
    id: 1,
    nota: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Diablo',
    infos: ['Destaque da Semana', 'Japonesa'],
    image: resident
  },
  {
    id: 2,
    nota: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'Diablo',
    infos: ['Italiana'],
    image: diablo
  },
  {
    id: 3,
    nota: '4.7',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Zelda',
    infos: ['Japonesa'],
    image: zelda
  },
  {
    id: 4,
    nota: '4.8',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'Star Wars',
    infos: ['Italiana'],
    image: starWars
  },
  {
    id: 5,
    nota: '4.6',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Diablo',
    infos: ['Japonesa'],
    image: resident
  },
  {
    id: 6,
    nota: '4.7',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'Diablo',
    infos: ['Italiana'],
    image: diablo
  }
]

const Home = () => (
  <>
    <ProductsList games={promocoes} />
  </>
)

export default Home
