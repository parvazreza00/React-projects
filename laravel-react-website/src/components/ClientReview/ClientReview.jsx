import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SliderImport  from "react-slick";
import testimonial1 from "../../assets/images/testimonial-1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = SliderImport.default || SliderImport;

export class ClientReview extends Component {
  render() {
    var settings = {
      autoplaySpeed: 3000,
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 3000,
      vertical: true,
      verticalSwiping: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div>
        <Fragment>
          <Container fluid={true} className="sideBack text-center">
            <h1 className="clientReviewHeadline text-white">Client Reviews</h1>
            <div className="clientReviewbottomBar"></div>

            <Slider {...settings}>
              <div>
                <Row className="justify-content-center">
                  <Col lg={6} md={6} sm={12}>
                    <img src={testimonial1} alt="" className="clientImage" />
                    <h2 className="clientName">Yeasin Ahmed </h2>
                    <p className="clientReviewDescription">
                      Qualified web design and attractive effects which catches
                      visitores Eye. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Natus ducimus corporis, minima molestiae
                      ex rerum exercitationem quaerat unde cupiditate
                      consequatur.
                    </p>
                  </Col>
                </Row>
              </div>


              <div>
                <Row className="justify-content-center">
                  <Col lg={6} md={6} sm={12}>
                    <img src={testimonial1} alt="" className="clientImage" />
                    <h2 className="clientName">Yeasin Ahmed </h2>
                    <p className="clientReviewDescription">
                      Qualified web design and attractive effects which catches
                      visitores Eye. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Natus ducimus corporis, minima molestiae
                      ex rerum exercitationem quaerat unde cupiditate
                      consequatur.
                    </p>
                  </Col>
                </Row>
              </div>

              <div>
                <Row className="justify-content-center">
                  <Col lg={6} md={6} sm={12}>
                    <img src={testimonial1} alt="" className="clientImage" />
                    <h2 className="clientName">Yeasin Ahmed </h2>
                    <p className="clientReviewDescription">
                      Qualified web design and attractive effects which catches
                      visitores Eye. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Natus ducimus corporis, minima molestiae
                      ex rerum exercitationem quaerat unde cupiditate
                      consequatur.
                    </p>
                  </Col>
                </Row>
              </div>

            </Slider>
          </Container>
        </Fragment>
      </div>
    );
  }
}

export default ClientReview;
