import React from 'react'

// Carousel
import Carousel from 'react-bootstrap/Carousel'

// Assets
import lab from '../../../assets/images/lab.jpg'
import lab1 from '../../../assets/images/lab1.jpg'
import contact from '../../../assets/images/contact.jpg'
import walls from '../../../assets/images/walls.jpg'

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={lab}
          alt="lab"
        />
        <Carousel.Caption>
          <h3>Lab</h3>
          <p>Lorem Ipsum Lorem Ipsum</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={lab1}
          alt="lab1"
        />
        <Carousel.Caption>
          <h3>Lab1</h3>
          <p>Lorem Ipsum Lorem Ipsum</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={contact}
          alt="contact"
        />
        <Carousel.Caption>
          <h3>Contact</h3>
          <p>Lorem Ipsum Lorem Ipsum</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselComponent