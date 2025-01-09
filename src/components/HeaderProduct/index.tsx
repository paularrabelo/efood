import { Link } from 'react-router-dom'
import { HeaderBar, Titulo } from './styles'
import logo from '../../assets/images/logo.png'
import bannerImg from '../../assets/images/Vector.png'

const HeaderProduct = () => (
  <HeaderBar style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Link to="/">
        <Titulo>Restaurantes</Titulo>
      </Link>
      <Link to="/">
        <img src={logo} alt="Logo EFOOD" />
      </Link>
      <Titulo>0 produto(s) no carrinho</Titulo>
    </div>
  </HeaderBar>
)

export default HeaderProduct
