import React from 'react'
import { CustomRow } from '../style'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Figure from 'react-bootstrap/Figure'
import data from '../data'
import { Link } from '../../components/Navbar/style'

const Services = () => {
  return (
    <Container>
      <CustomRow margin={'70px 0 0 0'}>
        <h1>Services We Provide</h1>
        <h5>Minions ipsum potatoooo bappleees bee do bee do bee do bee do bee do bee do. Butt tank yuuu! Bee do bee do bee do baboiii. Jeje underweaaar potatoooo bananaaaa poulet tikka masala poopayee butt. Uuuhhh belloo! Underweaaar uuuhhh chasy gelatooo jiji tulaliloo para tú. Butt bee do bee do bee do bananaaaa baboiii hahaha ti aamoo! Belloo! Uuuhhh. Aaaaaah jiji tank yuuu! Bappleees bananaaaa bee do bee do bee do po kass hahaha. Gelatooo wiiiii pepete wiiiii para tú baboiii hahaha belloo!</h5>
        {data.services.data.map((service, index) => (
          <Container key={`${service.title}_${index}`}>
            <Jumbotron>
              <Row>
                <Col xs={12} md={3} lg={3}>
                  <Figure>
                    <Figure.Image style={{width: '100%', height:'100%'}} alt="200x200" src={service.imageName} />
                  </Figure>
                </Col>
                <Col xs={12} md={9} lg={9}>
                  <h4 style={{color: 'grey'}}>{service.title}</h4>
                  <h6>{service.summary}</h6>
                </Col>
              </Row>
              <Link to="/contactUs" showBlock={false}>
                <Button variant="outline-success">
                  Contact Us
                </Button>
              </Link>
            </Jumbotron>
          </Container>
        ))}
      </CustomRow>
    </Container>
  )
}

export default Services