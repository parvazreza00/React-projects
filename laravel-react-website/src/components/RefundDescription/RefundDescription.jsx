import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export class RefundDescription extends Component {
  render() {
    return (
      <Fragment>
        <Container className='mt-5'>
            <Row>
                <Col lg={12} md={12} sm={12}>
                <h1 className="serviceName">REFUND AND CANCELLATION POLICY</h1>
                <h3 className="serviceName">Refund Policy</h3>
                <p className="serviceDescription">
                    <ul>
                        <li>
                            If you enroll in or purchase any course from Ostad, you will not be eligible to request a full or partial refund of the course fee before the main live classes or batch officially begins, and no refund will be issued during this period.
                        </li>
                        <li>
                            Once the main live classes or batch of your course has started, you will not be eligible for a refund until the first module or one (1) week of the course has been completed.
                        </li>
                        <li>
                            After completing one (1) module or one (1) week of the course, you may be eligible for a refund, subject to the applicable terms and conditions.
                        </li>
                        <li>
                            You will have only one (1) week (7 days) from the completion of the first module or one (1) week to claim a refund. Once this seven (7)-day period has expired, you will no longer be able to apply for a refund, and Ostad will not be obligated to issue a refund.
                        </li>
                        <li>
                            If you enroll without applying a promotional code, you cannot request a refund equivalent to the discount amount that could have been obtained by using the promotional code.
                        </li>
                    </ul>
                </p>
                <hr />
                <h3 className="serviceName">Conditions for Receiving a Refund</h3>
                <p className="serviceDescription">In addition to the conditions mentioned above, the following conditions must also be met to be eligible for a refund:</p>
                <p className="serviceDescription">
                    <ul>
                        <li>
                            You may apply for a refund only if the course fee has been paid in full.
                        </li>
                        <li>
                            You must provide a valid and reasonable reason for requesting a refund.
                        </li>
                        <li>
                            A refund may only be requested if the student experiences difficulties due to a service-related issue on the part of Ostad—for example, if Ostad fails to provide something that was explicitly promised before the course was purchased.
                        </li>
                        <li>
                            You will have only one (1) week (7 days) to submit a refund claim. Once this seven (7)-day period has expired, you will no longer be able to apply for a refund, and Ostad will not be obligated to issue a refund.
                        </li>
                    </ul>
                </p>
                <hr />
                <h1 className="serviceName">When Will You Receive Your Refund?</h1>
                <p className="serviceDescription">After reviewing and verifying your refund application, if the claim is found to be valid, your refund will be processed within 14–21 days from the date of application.</p>
                </Col>
            </Row>
        </Container>
        
      </Fragment>
    )
  }
}

export default RefundDescription
