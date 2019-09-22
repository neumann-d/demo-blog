import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'
import Col from 'react-bootstrap/Col'

// Components
import Carousel from '../../components/Carousel'
import Card from '../../components/BootstrapCard'

// Style
import { CustomRow } from '../style'
import { Jumbotron } from './style'

// Data
import data from '../data'
import Alert from 'react-bootstrap/Alert'

import lab from '../../assets/images/lab.jpg'

const Home = () => {

  const showProductsAndServices = (data) => {
    const { data: items, location } = data
    return items.map((item, index) => {
      return (
        <Col xs={12} sm={6} lg={4} key={`${item.title}_${index}`}>
          <Card
            itemData={item}
            location={location}
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

      {/* products */}
      <CustomRow margin={'40px 0 0 0'}>
        <Col xs={0} sm={0} lg={5}>
          <hr style={{width: '100%', height: '10%', backgroundColor: 'grey'}}/>
        </Col>
        <Col xs={12} sm={12} lg={2}>
          <h4 style={{textAlign: 'center'}}>Products</h4>
        </Col>
        <Col xs={0} sm={0} lg={5}>
          <hr style={{width: '100%', height: '10%', backgroundColor: 'grey'}}/>
        </Col>
      </CustomRow>
      <Alert variant={'light'} style={{marginTop: '20px'}}>
        <CustomRow>
          {showProductsAndServices(data.products)}
        </CustomRow>
      </Alert>

      {/* Services */}
      <CustomRow margin={'40px 0 0 0'}>
        <Col xs={0} sm={0} lg={5}>
          <hr style={{width: '100%', height: '10%', backgroundColor: 'grey'}}/>
        </Col>
        <Col xs={12} sm={12} lg={2}>
          <h4 style={{textAlign: 'center'}}>Services</h4>
        </Col>
        <Col xs={0} sm={0} lg={5}>
          <hr style={{width: '100%', height: '10%', backgroundColor: 'grey'}}/>
        </Col>
      </CustomRow>
      <Alert variant={'light'} style={{marginTop: '10px'}}>
        <CustomRow>
          {showProductsAndServices(data.services)}
        </CustomRow>
      </Alert>

      {/* Contact */}
      <CustomRow margin={'40px 0 0 0'}>
        <Col xs={0} sm={0} lg={5}>
          <hr style={{width: '100%', height: '10%', backgroundColor: 'grey'}}/>
        </Col>
        <Col xs={12} sm={12} lg={2}>
          <h4 style={{textAlign: 'center'}}>Contact</h4>
        </Col>
        <Col xs={0} sm={0} lg={5}>
          <hr style={{width: '100%', height: '10%', backgroundColor: 'grey'}}/>
        </Col>
      </CustomRow>
      <Alert variant={'success'} style={{marginTop: '10px'}}>
        <CustomRow>
          <Col xs={12} sm={12} lg={6} style={{textAlign: 'center'}}>
            <Figure>
              <Figure.Image
                style={{width: '200px', height: '200px', borderRadius: '50%'}}
                alt="171x180"
                src={lab}
              />
              <Figure.Caption>
                {data.contact.name}
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={12} sm={12} lg={6} style={{textAlign: 'center'}}>
            <h6><u><b>Email</b></u></h6>
            <p style={{color: 'red'}}><i>{data.contact.email}</i></p>
            <h6><u><b>Mobile</b></u></h6>
            <p style={{color: 'red'}}><i>{data.contact.mobile}</i></p>
            <h6><u><b>Address</b></u></h6>
            <p style={{color: 'red'}}><i>{data.contact.address1}</i></p>
            <p style={{color: 'red'}}><i>{data.contact.address2}</i></p>
            <p style={{color: 'red'}}><i>{data.contact.address3}</i></p>
          </Col>
        </CustomRow>
      </Alert>
    </Container>
  )
}

export default Home