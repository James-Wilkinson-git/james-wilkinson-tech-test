//React Imports
import React, { FC } from "react";
import { Button, Col, Container, ProgressBar, Row } from "react-bootstrap";
//Self Imports
//Style Imports
import "./App.scss";

//Entry point to the application rendered by index.tsx
export const App: FC = () => {
  return (
    <>
      <Container className="App" data-testid="AppContainer">
        <Row className="mt-3">
          <h1>Drone Rentals</h1>
        </Row>
        <Row>
          <Col>
            <Row className="mb-3">
              <h2>Soho Station</h2>
              <div className="wdBorderBox">
                <Row>
                  <Col>
                    <img
                      src={"/images/drones/Nano%20QX.jpg"}
                      alt="Drone"
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <h5>Drone Name</h5>
                    <h6>Drone Manufacturer</h6>
                  </Col>
                  <Col>
                    <p>
                      <small>Max Flight Time: 23 min</small>
                    </p>
                    <Button type="primary">Rent</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <small>Battery</small>
                    <ProgressBar variant="success" now={40} />
                  </Col>
                </Row>
              </div>
              <div className="wdBorderBox">
                <Row>
                  <Col>
                    <img
                      src={"/images/drones/Nano%20QX.jpg"}
                      alt="Drone"
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <h5>Drone Name</h5>
                    <h6>Drone Manufacturer</h6>
                  </Col>
                  <Col>
                    <Button type="primary">Rent</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <small>Battery</small>
                    <ProgressBar variant="success" now={40} />
                  </Col>
                </Row>
              </div>
              <div className="wdBorderBox">
                <Row>
                  <Col>
                    <img
                      src={"/images/drones/Nano%20QX.jpg"}
                      alt="Drone"
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <h5>Drone Name</h5>
                    <h6>Drone Manufacturer</h6>
                  </Col>
                  <Col>
                    <Button type="primary">Rent</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <small>Battery</small>
                    <ProgressBar variant="success" now={40} />
                  </Col>
                </Row>
              </div>
              <div className="wdBorderBox">
                <Row>
                  <Col>
                    <img
                      src={"/images/drones/Nano%20QX.jpg"}
                      alt="Drone"
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <h5>Drone Name</h5>
                    <h6>Drone Manufacturer</h6>
                  </Col>
                  <Col>
                    <Button type="primary">Rent</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <small>Battery</small>
                    <ProgressBar variant="success" now={40} />
                  </Col>
                </Row>
              </div>
              <div className="wdBorderBox">
                <Row>
                  <Col>
                    <img
                      src={"/images/drones/Nano%20QX.jpg"}
                      alt="Drone"
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <h5>Drone Name</h5>
                    <h6>Drone Manufacturer</h6>
                  </Col>
                  <Col>
                    <Button type="primary">Rent</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <small>Battery</small>
                    <ProgressBar variant="success" now={40} />
                  </Col>
                </Row>
              </div>
              <div className="wdBorderBox">
                <Row>
                  <Col>
                    <img
                      src={"/images/drones/Nano%20QX.jpg"}
                      alt="Drone"
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <h5>Drone Name</h5>
                    <h6>Drone Manufacturer</h6>
                  </Col>
                  <Col>
                    <Button type="primary">Rent</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <small>Battery</small>
                    <ProgressBar variant="success" now={40} />
                  </Col>
                </Row>
              </div>
              <div className="wdBorderBox">
                <Row>
                  <Col>
                    <img
                      src={"/images/drones/Nano%20QX.jpg"}
                      alt="Drone"
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <h5>Drone Name</h5>
                    <h6>Drone Manufacturer</h6>
                  </Col>
                  <Col>
                    <Button type="primary">Rent</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <small>Battery</small>
                    <ProgressBar variant="success" now={40} />
                  </Col>
                </Row>
              </div>
              <div className="wdBorderBox">
                <Row>
                  <Col>
                    <img
                      src={"/images/drones/Nano%20QX.jpg"}
                      alt="Drone"
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <h5>Drone Name</h5>
                    <h6>Drone Manufacturer</h6>
                  </Col>
                  <Col>
                    <Button type="primary">Rent</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <small>Battery</small>
                    <ProgressBar variant="success" now={40} />
                  </Col>
                </Row>
              </div>
              <div className="wdBorderBox">
                <Row>
                  <Col>
                    <img
                      src={"/images/drones/Nano%20QX.jpg"}
                      alt="Drone"
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <h5>Drone Name</h5>
                    <h6>Drone Manufacturer</h6>
                  </Col>
                  <Col>
                    <Button type="primary">Rent</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <small>Battery</small>
                    <ProgressBar variant="success" now={40} />
                  </Col>
                </Row>
              </div>
              <div className="wdBorderBox">
                <Row>
                  <Col>
                    <img
                      src={"/images/drones/Nano%20QX.jpg"}
                      alt="Drone"
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <h5>Drone Name</h5>
                    <h6>Drone Manufacturer</h6>
                  </Col>
                  <Col>
                    <Button type="primary">Rent</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <small>Battery</small>
                    <ProgressBar variant="success" now={40} />
                  </Col>
                </Row>
              </div>
            </Row>
            <Row className="mb-3">
              <h2>Vauxhall Station</h2>
              <div className="wdBorderBox">
                <Row>
                  <Col>
                    <img
                      src={"/images/drones/Nano%20QX.jpg"}
                      alt="Drone"
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <h5>Drone Name</h5>
                    <h6>Drone Manufacturer</h6>
                  </Col>
                  <Col>
                    <Button type="primary">Rent</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <small>Battery</small>
                    <ProgressBar variant="success" now={40} />
                  </Col>
                </Row>
              </div>
              <div className="wdBorderBox">
                <Row>
                  <Col>
                    <img
                      src={"/images/drones/Nano%20QX.jpg"}
                      alt="Drone"
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <h5>Drone Name</h5>
                    <h6>Drone Manufacturer</h6>
                  </Col>
                  <Col>
                    <Button type="primary">Rent</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <small>Battery</small>
                    <ProgressBar variant="success" now={40} />
                  </Col>
                </Row>
              </div>
              <div className="wdBorderBox">
                <Row>
                  <Col>
                    <img
                      src={"/images/drones/Nano%20QX.jpg"}
                      alt="Drone"
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <h5>Drone Name</h5>
                    <h6>Drone Manufacturer</h6>
                  </Col>
                  <Col>
                    <Button type="primary">Rent</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <small>Battery</small>
                    <ProgressBar variant="success" now={40} />
                  </Col>
                </Row>
              </div>
              <div className="wdBorderBox">
                <Row>
                  <Col>
                    <img
                      src={"/images/drones/Nano%20QX.jpg"}
                      alt="Drone"
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <h5>Drone Name</h5>
                    <h6>Drone Manufacturer</h6>
                  </Col>
                  <Col>
                    <Button type="primary">Rent</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <small>Battery</small>
                    <ProgressBar variant="success" now={40} />
                  </Col>
                </Row>
              </div>
              <div className="wdBorderBox">
                <Row>
                  <Col>
                    <img
                      src={"/images/drones/Nano%20QX.jpg"}
                      alt="Drone"
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <h5>Drone Name</h5>
                    <h6>Drone Manufacturer</h6>
                  </Col>
                  <Col>
                    <Button type="primary">Rent</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <small>Battery</small>
                    <ProgressBar variant="success" now={40} />
                  </Col>
                </Row>
              </div>
              <div className="wdBorderBox">
                <Row>
                  <Col>
                    <img
                      src={"/images/drones/Nano%20QX.jpg"}
                      alt="Drone"
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <h5>Drone Name</h5>
                    <h6>Drone Manufacturer</h6>
                  </Col>
                  <Col>
                    <Button type="primary">Rent</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <small>Battery</small>
                    <ProgressBar variant="success" now={40} />
                  </Col>
                </Row>
              </div>
              <div className="wdBorderBox">
                <Row>
                  <Col>
                    <img
                      src={"/images/drones/Nano%20QX.jpg"}
                      alt="Drone"
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <h5>Drone Name</h5>
                    <h6>Drone Manufacturer</h6>
                  </Col>
                  <Col>
                    <Button type="primary">Rent</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <small>Battery</small>
                    <ProgressBar variant="success" now={40} />
                  </Col>
                </Row>
              </div>
              <div className="wdBorderBox">
                <Row>
                  <Col>
                    <img
                      src={"/images/drones/Nano%20QX.jpg"}
                      alt="Drone"
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <h5>Drone Name</h5>
                    <h6>Drone Manufacturer</h6>
                  </Col>
                  <Col>
                    <Button type="primary">Rent</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <small>Battery</small>
                    <ProgressBar variant="success" now={40} />
                  </Col>
                </Row>
              </div>
            </Row>
            <Row>
              <h2>Camden Station</h2>
              <div className="wdBorderBox">
                <Row>
                  <Col>
                    <img
                      src={"/images/drones/Nano%20QX.jpg"}
                      alt="Drone"
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <h5>Drone Name</h5>
                    <h6>Drone Manufacturer</h6>
                  </Col>
                  <Col>
                    <Button type="primary">Rent</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <small>Battery</small>
                    <ProgressBar variant="success" now={40} />
                  </Col>
                </Row>
              </div>
              <div className="wdBorderBox">
                <Row>
                  <Col>
                    <img
                      src={"/images/drones/Nano%20QX.jpg"}
                      alt="Drone"
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <h5>Drone Name</h5>
                    <h6>Drone Manufacturer</h6>
                  </Col>
                  <Col>
                    <Button type="primary">Rent</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <small>Battery</small>
                    <ProgressBar variant="success" now={40} />
                  </Col>
                </Row>
              </div>
              <div className="wdBorderBox">
                <Row>
                  <Col>
                    <img
                      src={"/images/drones/Nano%20QX.jpg"}
                      alt="Drone"
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <h5>Drone Name</h5>
                    <h6>Drone Manufacturer</h6>
                  </Col>
                  <Col>
                    <Button type="primary">Rent</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <small>Battery</small>
                    <ProgressBar variant="success" now={40} />
                  </Col>
                </Row>
              </div>
              <div className="wdBorderBox">
                <Row>
                  <Col>
                    <img
                      src={"/images/drones/Nano%20QX.jpg"}
                      alt="Drone"
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <h5>Drone Name</h5>
                    <h6>Drone Manufacturer</h6>
                  </Col>
                  <Col>
                    <Button type="primary">Rent</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <small>Battery</small>
                    <ProgressBar variant="success" now={40} />
                  </Col>
                </Row>
              </div>
              <div className="wdBorderBox">
                <Row>
                  <Col>
                    <img
                      src={"/images/drones/Nano%20QX.jpg"}
                      alt="Drone"
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <h5>Drone Name</h5>
                    <h6>Drone Manufacturer</h6>
                  </Col>
                  <Col>
                    <Button type="primary">Rent</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <small>Battery</small>
                    <ProgressBar variant="success" now={40} />
                  </Col>
                </Row>
              </div>
              <div className="wdBorderBox">
                <Row>
                  <Col>
                    <img
                      src={"/images/drones/Nano%20QX.jpg"}
                      alt="Drone"
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <h5>Drone Name</h5>
                    <h6>Drone Manufacturer</h6>
                  </Col>
                  <Col>
                    <Button type="primary">Rent</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <small>Battery</small>
                    <ProgressBar variant="success" now={40} />
                  </Col>
                </Row>
              </div>
            </Row>
          </Col>
          <Col className="d-none d-md-block">
            <h3>Drone Info</h3>
            <p>Select a drone to continue</p>
            <div className="wdBorderBox">
              <h4>
                Anafari by <em>Ford</em>
              </h4>
              <p>
                <img
                  src={"/images/drones/Nano%20QX.jpg"}
                  alt="Drone"
                  className="img-fluid"
                />
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                scelerisque nunc at euismod venenatis. Donec sagittis iaculis
                est, in ultricies enim suscipit in. Ut condimentum ex sed arcu
                congue, eu luctus tellus commodo. Aenean suscipit, lorem vel
                tempus laoreet, neque nulla porttitor lorem, at laoreet ipsum
                tortor vel quam. Duis arcu nisi, scelerisque non dolor vitae,
                aliquam egestas orci. Nulla justo orci, maximus non sagittis sit
                amet, aliquet a ipsum. Praesent et dapibus sapien. Nullam
                feugiat augue quis quam tincidunt, a molestie ligula sodales.
                Fusce volutpat risus vel ullamcorper placerat.
              </p>
              <p>
                <Button type="primary">Rent</Button>
              </p>
            </div>
          </Col>
          <Col className="d-none d-md-block">
            <h3>Your Rental</h3>
            <div className="spinner-border text-primary" role="status">
              <span className="invisible">Loading...</span>
            </div>
            <div className="wdBorderBox">
              <Row>
                <Col>
                  <img
                    src={"/images/drones/Nano%20QX.jpg"}
                    alt="Drone"
                    className="img-fluid"
                  />
                </Col>
                <Col>
                  <h5>Drone Name</h5>
                  <h6>Drone Manufacturer</h6>
                </Col>
                <Col>
                  <Button type="primary">Return</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <small>Battery</small>
                  <ProgressBar variant="success" now={40} />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="yourRentals fixed-bottom d-md-none">
        <h6>Your Rental</h6>
        <div className="wdBorderBox">
          <Row>
            <Col>
              <img
                src={"/images/drones/Nano%20QX.jpg"}
                alt="Drone"
                className="img-fluid"
              />
            </Col>
            <Col>
              <h5>Drone Name</h5>
              <h6>Drone Manufacturer</h6>
            </Col>
            <Col>
              <p>
                <small>Time Remaining: 23 min</small>
              </p>
              <Button variant="info">Return</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <small>Battery</small>
              <ProgressBar variant="success" now={40} />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
