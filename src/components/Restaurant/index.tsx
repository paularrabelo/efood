import Button from '../Button'
import Tag from '../Tag'
import {
  CardContainer,
  Estrela,
  Infos,
  Paragrafo,
  Titulo,
  TituloContainer
} from './styles'
import estrela from '../../assets/images/estrela.png'

type Props = {
  title: string
  nota: string
  description: string
  infos: string[]
  image: string
}

const Restaurant = ({ title, nota, description, infos, image }: Props) => (
  <CardContainer>
    <img src={image} alt={title} />
    <div>
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <TituloContainer>
        <Titulo>{title}</Titulo>
        <div>
          <Titulo>{nota}</Titulo>
          <Estrela src={estrela} alt="" />
        </div>
      </TituloContainer>
      <Paragrafo>{description}</Paragrafo>
      <Button
        type="link"
        to="/categories"
        title="Clique aqui para aproveitar esta oferta"
      >
        Saiba mais
      </Button>
    </div>
  </CardContainer>
)

export default Restaurant
