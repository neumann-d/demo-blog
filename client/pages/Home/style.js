import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import CardComponent from 'react-bootstrap/Card'
import { color } from '../theme'
import molecule from '../../assets/icons/molecule.png'

const ElementContainer = styled(Row)`
  margin: 10px 0;
  width: 100% !important;
`

const Card = styled(CardComponent)`
  width: 100%;
`

const List = styled.ul`
  width: 100%;
  list-style: square outside none;
`

const Item = styled.li`
  color: ${color.blueGrey};
  font-size: 18px;
`

export { ElementContainer, List, Item, Card }