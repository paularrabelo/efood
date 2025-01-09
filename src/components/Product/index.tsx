import Button from '../Button'
import { CardContainer, Paragrafo, Titulo } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Product = ({ title, description, image }: Props) => (
  <CardContainer>
    <img src={image} alt={title} />
    <div>
      <Titulo>{title}</Titulo>
      <Paragrafo>{description}</Paragrafo>
      <Button
        type="button"
        to="/categories"
        title="Clique aqui para aproveitar esta oferta"
      >
        Adicionar ao carrinho
      </Button>
    </div>
  </CardContainer>
)

export default Product
