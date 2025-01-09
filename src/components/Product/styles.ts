import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonProduct } from '../Button/styles'

export const CardContainer = styled.div`
  border: 1px solid ${cores.rosa};
  position: relative;
  margin-top: 80px;
  background-color: ${cores.rosa};
  color: ${cores.branco};
  padding: 8px;

  img {
    width: 100%;
  }
  ${ButtonProduct} {
    width: 100%;
    cursor: pointer;
  }
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin: 8px 0;
`
export const Paragrafo = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  height: 88px;
  margin-bottom: 8px;
`
