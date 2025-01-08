import Game from '../../models/Game'
import Product from '../Product'
import { Container, List, Title } from './styles'

export type Props = {
  games: Game[]
}

const ProductsList = ({ games }: Props) => (
  <Container>
    <div className="container">
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            nota={game.nota}
            description={game.description}
            image={game.image}
            infos={game.infos}
            title={game.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
