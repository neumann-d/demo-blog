import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Collapse from 'react-bootstrap/Collapse'

// Components
import Carousel from '../../components/Carousel'

// Style
import { ElementContainer, List, Item, Card } from './style'
import { CustomRow } from '../style'

// Data
import data from '../data.json'

// images
import lab from '../../assets/images/lab.jpg'
import lab1 from '../../assets/images/lab1.jpg'

const Home = () => {

  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)

  const getDescriptionsInList = (values) => {
    return (
      <List>
        {values.map((val, i) => {
          return (
            <Item key={`${val.id}_${val.desc}`}>{val.desc}</Item>
          )
        })}
      </List>
    )
  }
  return (
    <Container>
      <CustomRow margin={'70px 0 20px 0'}><Carousel /></CustomRow>
      <Jumbotron>
        <h1>Lorem Ipsum!</h1>
        <p>
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <CustomRow margin={'10px 0 0 0'}>
        <Col xs={12} sm={6} lg={4}>
          <Card>
            <Card.Img variant="top" src={lab}/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                catchy caption text to define the purpose of the image
              </Card.Text>
              <Collapse in={open1}>
                <div id="collapse-text">
                  {getDescriptionsInList(data.home.problems)}
                </div>
              </Collapse>
              <Button
                variant="primary"
                onClick={() => setOpen1(!open1)}
                aria-controls="collapse-text"
                aria-expanded={open1}
              >
                {open1 ? 'See less' : 'See more'}
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <Card>
            <Card.Img variant="top" src={lab}/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                catchy caption text to define the purpose of the image
              </Card.Text>
              <Collapse in={open2}>
                <div id="collapse-text">
                  {getDescriptionsInList(data.home.problems)}
                </div>
              </Collapse>
              <Button
                variant="primary"
                onClick={() => setOpen2(!open2)}
                aria-controls="collapse-text"
                aria-expanded={open2}
              >
                {open2 ? 'See less' : 'See more'}
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <Card>
            <Card.Img variant="top" src={lab}/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                catchy caption text to define the purpose of the image
              </Card.Text>
              <Collapse in={open3}>
                <div id="collapse-text">
                  {getDescriptionsInList(data.home.problems)}
                </div>
              </Collapse>
              <Button
                variant="primary"
                onClick={() => setOpen3(!open3)}
                aria-controls="collapse-text"
                aria-expanded={open3}
              >
                {open3 ? 'See less' : 'See more'}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </CustomRow>
    </Container>
  )
}

export default Home