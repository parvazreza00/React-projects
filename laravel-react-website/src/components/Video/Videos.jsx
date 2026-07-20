import React, { Component, Fragment } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";

export class Videos extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  modalClose = () => {
    this.setState({ show: false });
  };
  modalOpen = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <div>
        <Fragment>
          <Container className="text-center">
            <h1 className="videoTitle">My Videos</h1>
            <div className="bottomBar"></div>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <p className="videoDescription">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam omnis laboriosam consequuntur tenetur non alias
                  iste. Repellat at similique totam quidem! Ipsum quibusdam,
                  enim, impedit, eligendi ducimus repudiandae ullam vero
                  voluptate unde ut tempore facilis nihil. Eum a asperiores modi
                  repellat, debitis nemo assumenda maiores voluptas nam error,
                  vitae, sint corrupti delectus fuga ad repudiandae voluptatem
                  ratione porro at impedit laboriosam tempora reiciendis
                  nesciunt? Itaque ipsum, nobis quis, culpa error voluptas
                  molestiae, veniam natus similique porro veritatis earum nam
                  assumenda quaerat placeat doloribus harum omnis reprehenderit
                  nulla dicta numquam et sed. Odio, expedita? Et numquam
                  deleniti ipsam dignissimos! Necessitatibus, consequuntur.
                </p>
              </Col>
              <Col lg={6} md={6} sm={12} className="videoCard">
                <FontAwesomeIcon
                  onClick={this.modalOpen}
                  icon={faVideoSlash}
                  style={{
                    fontSize: "40px",
                    color: "white",
                    cursor: "pointer",
                  }}
                />
              </Col>
            </Row>
          </Container>

          <Modal
            size="lg"
            show={this.state.show}
            onHide={this.modalClose}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "56.25%",
                }}
              >
                <ReactPlayer
                  src="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  controls
                  width="100%"
                  height="100%"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={this.modalClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Fragment>
      </div>
    );
  }
}

export default Videos;
