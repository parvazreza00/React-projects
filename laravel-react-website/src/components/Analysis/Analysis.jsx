import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

export class Analysis extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          Technology: "PHP",
          projects: 100,
        },       
        {
          Technology: "Wordpress",
          projects: 140,
        },
        {
          Technology: "HTML",
          projects: 200,
        },
        {
          Technology: "CSS",
          projects: 300,
        },
        {
          Technology: "Vuejs",
          projects: 40,
        },
        {
          Technology: "Reactjs",
          projects: 90,
        },
        {
          Technology: "Livewire",
          projects: 130,
        },
      ],
    };
  }
  render() {
    return (
      <Fragment>
        <Container className="text-center mb-5">
          <h1 className="analysisMainTitle">Technology Used</h1>
          <div className="bottomBar"></div>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <div style={{ width: "100%", height: "350px" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={this.state.data}>
                    <XAxis dataKey="Technology" />
                    <Tooltip />
                    <Bar dataKey="projects" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <p className="text-justify analysisDescription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                numquam impedit nesciunt neque quas magnam tempore nobis, earum
                enim exercitationem natus temporibus, laboriosam veritatis
                eveniet vitae est dolorem soluta ad architecto similique error.
                Doloribus quisquam voluptatibus dignissimos quos excepturi
                repellendus maiores eaque accusamus aliquid. Nulla maiores
                doloremque debitis sequi, est quas dolor possimus ducimus
                quisquam sint, delectus neque eligendi ullam pariatur cum.
                Quidem aperiam numquam alias officia, odit iste eius.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Analysis;
