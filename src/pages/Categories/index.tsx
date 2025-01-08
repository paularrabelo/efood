import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import resident from '../../assets/images/macarrao.png'
import diablo from '../../assets/images/macarrao.png'
import zelda from '../../assets/images/macarrao.png'
import starWars from '../../assets/images/macarrao.png'
import Banner from '../../components/Banner'

const promocoes: Game[] = [
  {
    id: 1,
    nota: 'Acao',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Diablo',
    infos: ['R$ 250,00', '10%'],
    image: resident
  },
  {
    id: 2,
    nota: 'Acao',
    description:
      'Resident Evil 4, conhecido no japao como Biohazard 4, e um jogo eletronico de survival horror',
    title: 'Diablo',
    infos: ['R$ 290,00', '5%'],
    image: diablo
  },
  {
    id: 3,
    nota: 'Acao',
    description:
      'Resident Evil 4, conhecido no japao como Biohazard 4, e um jogo eletronico de survival horror',
    title: 'Zelda',
    infos: ['R$ 250,00', '10%'],
    image: zelda
  },
  {
    id: 4,
    nota: 'Acao',
    description:
      'Resident Evil 4, conhecido no japao como Biohazard 4, e um jogo eletronico de survival horror',
    title: 'Star Wars',
    infos: ['R$ 250,00', '10%'],
    image: starWars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    nota: 'Acao',
    description:
      'Resident Evil 4, conhecido no japao como Biohazard 4, e um jogo eletronico de survival horror',
    title: 'Diablo',
    infos: ['28/01'],
    image: resident
  },
  {
    id: 6,
    nota: 'Acao',
    description:
      'Resident Evil 4, conhecido no japao como Biohazard 4, e um jogo eletronico de survival horror',
    title: 'Diablo',
    infos: ['11/02'],
    image: diablo
  },
  {
    id: 7,
    nota: 'Acao',
    description:
      'Resident Evil 4, conhecido no japao como Biohazard 4, e um jogo eletronico de survival horror',
    title: 'Zelda',
    infos: ['12/03'],
    image: zelda
  },
  {
    id: 8,
    nota: 'Acao',
    description:
      'Resident Evil 4, conhecido no japao como Biohazard 4, e um jogo eletronico de survival horror',
    title: 'Star Wars',
    infos: ['17/05'],
    image: starWars
  }
]

const Categories = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} />
    <ProductsList games={emBreve} />
    <ProductsList games={promocoes} />
    <ProductsList games={emBreve} />
  </>
)

export default Categories
