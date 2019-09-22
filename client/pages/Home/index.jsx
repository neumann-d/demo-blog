import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

// Components
import Carousel from '../../components/Carousel'
import Card from '../../components/BootstrapCard'

// Style
import { CustomRow } from '../style'
import { Jumbotron } from './style'

// Data
import data from '../data'

const Home = () => {

  const showProducts = () => {
    return data.products.map((product, index) => {
      return (
        <Col xs={12} sm={6} lg={4} key={`${product.title}_${index}`}>
          <Card
            productData={product}
          />
        </Col>
      )
    })
  }

  return (
    <Container>
      <CustomRow margin={'70px 0 20px 0'}>
        <Carousel />
      </CustomRow>
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
          {showProducts()}
      </CustomRow>
    </Container>
  )
}

export default Home