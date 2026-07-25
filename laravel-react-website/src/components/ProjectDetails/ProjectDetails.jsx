import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import pdetails from '../../assets/images/pdetails.png'

export class ProjectDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
            <Row>
                <Col lg={6} md={6} sm={12} >
              
                 <img src={pdetails} alt="Project Details"/>                
              
                </Col>
                <Col lg={6} md={6} sm={12}> 
                <div className='project-details'>
                  <h1 className='projectDetailsText text-center'>Education is continuing a proude tradition</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat excepturi eius accusamus, vero fugit saepe ad soluta doloribus accusantium harum provident neque, labore error odio! Consequatur expedita laudantium voluptates quos ducimus sed incidunt accusamus illo? Nobis, velit quasi! Rerum earum quo quidem eos dolorem quaerat sint, magni voluptatem aperiam sunt.</p>
                  <p>Additional details about the project can be included here.</p>

                

                 <div className="feature-grid">
                    <div className="feature-item">
                      <div className="feature-icon"><FontAwesomeIcon icon={faCheck} /></div>
                      <span className="feature-text">Requirement Gathering</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon"><FontAwesomeIcon icon={faCheck} /></div>
                      <span className="feature-text">System Analysis</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon"><FontAwesomeIcon icon={faCheck} /></div>
                      <span className="feature-text">UI/UX Design</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon"><FontAwesomeIcon icon={faCheck} /></div>
                      <span className="feature-text">Frontend Development</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon"><FontAwesomeIcon icon={faCheck} /></div>
                      <span className="feature-text">Backend Development</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon"><FontAwesomeIcon icon={faCheck} /></div>
                      <span className="feature-text">Testing &amp; QA</span>
                    </div>
                  </div>
                
                </div>
                
                
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default ProjectDetails
