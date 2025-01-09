import Restaurante from '../../models/Restaurante'
import Restaurant from '../Restaurant'
import { Container, List } from './styles'

export type Props = {
  restaurantes: Restaurante[]
}

const RestaurantsList = ({ restaurantes }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurantes.map((restaurante) => (
          <Restaurant
            key={restaurante.id}
            nota={restaurante.nota}
            description={restaurante.description}
            image={restaurante.image}
            infos={restaurante.infos}
            title={restaurante.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantsList
