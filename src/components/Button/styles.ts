import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'
import { Props } from '../Tag'

export const ButtonContainer = styled.button<Props>`
  background-color: ${cores.rosa};
  color: ${cores.branco};
  border: 2px solid ${cores.rosa};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
`
export const ButtonLink = styled(Link)`
  background-color: ${cores.rosa};
  color: ${cores.branco};
  font-size: 12px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
  margin-left: 8px;
  margin-bottom: 8px;
`
