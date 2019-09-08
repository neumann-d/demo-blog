import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from '../routes/routesConfig'

import { Container, Body } from './style'


const App = () => {
  
  return (
    <BrowserRouter>
      <Container>
        <Body>
          {renderRoutes(routes)}
        </Body>
      </Container>
    </BrowserRouter>
    
  )
}

export default App