import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export class PrivacyPolicy extends Component {
  render() {
    return (
      <Fragment>
        <Container className='mt-5'>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <h1 className="serviceName">Privacy Policy</h1>
                    <p className="serviceDescription">We, Laravel-react-website Limited, registered under the Bangladesh Companies Act (Act XVIII) of 1994 (hereafter referred to as "Company"), with the incorporation number C-165312/2020, are dedicated to protecting your privacy with regard to the protection of your personal information. To make sure we can use your services, we might get your information and occasionally share it. This notice explains our information policies and the choices you have regarding the collection and use of your information in an effort to further protect your privacy. To make sure that everyone using the website, https://Laravel-react-website.app/ (hence "the website") and the "Laravel-react-website application" (subsequently "the Application") is aware of the privacy policy that regulates their use, by entering onto the website or application, you are indicating that you have read and agree to the terms and conditions outlined in this Privacy Policy. You cannot use the Website or App unless you accept our Privacy Policy, which governs the gathering and use of your personal information. If you have any concerns or questions regarding this privacy statement, you may email our Customer Support at support@Laravel-react-website.app.</p>
                </Col>
            </Row>
        </Container>
        
      </Fragment>
    )
  }
}

export default PrivacyPolicy
