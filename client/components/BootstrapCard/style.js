import styled from 'styled-components'
import CardComponent from 'react-bootstrap/Card'
import { color } from '../../pages/theme'

const Card = styled(CardComponent)`
  width: 100%;
  margin-top: 10%;
`

const List = styled.ul`
  width: 100%;
  list-style: square outside none;
`

const Item = styled.li`
  color: ${color.blueGrey};
  font-size: 18px;
`

export { Card, List, Item }