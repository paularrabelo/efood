import { Precos, Titulo } from './styles'
import Tag from '../Tag'

const Banner = () => (
  <div className="container">
    <Tag>Destaque do dia</Tag>
    <div>
      <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
      <Precos>
        De <span>R$ 250,00</span>
        <br />
        por apenas R$ 99,90
      </Precos>
    </div>
  </div>
)

export default Banner
