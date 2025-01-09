import { Imagem } from './styles'
import bannerImg from '../../assets/images/macarraoBanner.png'

const Banner = () => (
  <Imagem>
    <img src={bannerImg} alt="foto macarrao" />
    <div className="container">
      <h3>Italiana</h3>
      <h2>La Dolce Vita Trattoria</h2>
    </div>
  </Imagem>
)

export default Banner
