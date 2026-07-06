import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export class Home extends Component {
  render() {
    return (
      <div>

         <Container>
      <Row>
        <Col className='m-auto'>Home page</Col>
      </Row>
    </Container>
        
      </div>
    )
  }
}

export default Home
