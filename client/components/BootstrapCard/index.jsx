import React from 'react'
import { Link } from '../Navbar/style'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import { Card } from './style'
import { List, Item } from './style'

import BoxA from '../../assets/images/BoxA.png'
const BootstrapCard = ({productData}) => {
  const { id, title, summary, imageName, points, isActive } = productData

  const showPoints = () => {
    return points.map((point, index) => <Item key={`${point.types}_${index}`}>{point.types}</Item>)
  }

  return (
    <Card>
      <Card.Img variant="top" src={imageName}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{summary}</Card.Text>
        {/* {points.length &&
          <Collapse in={!isActive}>
            <div id="collapse-text">
              <List>{showPoints()}</List>
            </div>
          </Collapse>
        } */}
        <Link to="/products">
          <Button
            variant="primary"
          >
            Know more
          </Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default BootstrapCard