import React from 'react'
import { CustomRow } from '../style'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

import { Link } from '../../components/Navbar/style'

const AboutUs = () => {
  return (
    <Container>
      <CustomRow margin={'70px 0 0 0'}>
        <Alert variant="success" style={{width: '100%'}}>
          <Alert.Heading>Hey, nice that you want to know about us</Alert.Heading>
          <p>
            We are a LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Link to="/contactUs" showBlock={false}>
              <Button variant="outline-success">
                Contact Us
              </Button>
            </Link>
          </div>
        </Alert>
      </CustomRow>
    </Container>
  )
}

export default AboutUs