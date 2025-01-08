import Button from '../Button'
import Tag from '../Tag'
import { CardContainer, Estrela, Infos, Paragrafo, Titulo } from './styles'
import estrela from '../../assets/images/estrela.png'

type Props = {
  title: string
  nota: string
  description: string
  infos: string[]
  image: string
}

const Product = ({ title, nota, description, infos, image }: Props) => (
  <CardContainer>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <div>
      <Titulo>{title}</Titulo>
      <div>
        <Titulo>{nota}</Titulo>
        <Estrela src={estrela} alt="" />
      </div>
    </div>
    <Paragrafo>{description}</Paragrafo>
    <Button
      type="link"
      to="/produto"
      title="Clique aqui para aproveitar esta oferta"
    >
      Saiba mais
    </Button>
  </CardContainer>
)

export default Product
