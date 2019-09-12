import styled from 'styled-components'
import { color } from './theme'

const Footer = styled.div`
  width: 100vw;
  background-color: ${color.darkGrey};
  height: auto;
  padding: 20px;
  color: rgba(255,255,255,.5);
  text-align: center;
`

const CustomRow = styled.div`
  margin: ${props => props.margin};
`

export { Footer, CustomRow }