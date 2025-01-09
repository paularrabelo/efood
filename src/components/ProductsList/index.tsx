import Produto from '../../models/Produto'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  produtos: Produto[]
}

const ProductsList = ({ produtos }: Props) => (
  <Container>
    <div className="container">
      <List>
        {produtos.map((produto) => (
          <Product
            key={produto.id}
            description={produto.description}
            image={produto.image}
            title={produto.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
