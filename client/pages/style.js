import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import { color } from './theme'

const Footer = styled.div`
  width: 100vw;
  background-color: ${color.darkGrey};
  height: auto;
  padding: 20px;
  color: ${color.greyWhite};
  text-align: center;
`

const CustomRow = styled(Row)`
  margin: ${props => props.margin};
`

export { Footer, CustomRow }