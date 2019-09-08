import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

// Components
import Navbar from './components/navbar'
import Carousel from './components/carousel'

// Style
import { ElementContainer } from './style'

const Home = () => {
  return (
    <Container>
      <ElementContainer noGutters={true}><Navbar /></ElementContainer>
      <ElementContainer noGutters><Carousel /></ElementContainer>
      <Jumbotron>
        <h1>Lorem Ipsum!</h1>
        <p>
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </Container>
  )
}

export default Home