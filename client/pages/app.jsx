import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '../routes/routesConfig'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from '../components/Navbar'
import { Footer, CustomRow } from './style'

const App = () => {
  
  return (
    <BrowserRouter>
      <Navbar />
      {renderRoutes(routes)}
      <Footer>
        <Row>
          <Col sm={'6'} lg={'4'} xs={'12'}>Section1 for list of links</Col>
          <Col sm={'6'} lg={'4'} xs={'12'}>Section2 for list of links</Col>
          <Col sm={'6'} lg={'4'} xs={'12'}>Section3 for list of links</Col>
        </Row>
        <CustomRow margin={'40px 0 0 0'}><Col sm={'12'} lg={'12'}>@Copyright section</Col></CustomRow>
      </Footer>
    </BrowserRouter>
    
  )
}

export default App