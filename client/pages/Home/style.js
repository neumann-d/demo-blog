import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import JumbotronComponent from 'react-bootstrap/Jumbotron'
import { color } from '../theme'

const ElementContainer = styled(Row)`
  margin: 10px 0;
  width: 100% !important;
`

const Jumbotron = styled(JumbotronComponent)`
  margin-bottom: 0;
`

export { ElementContainer, Jumbotron }