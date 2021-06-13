import React from "react";
import { Button, Col } from "react-bootstrap";

export const DroneInfoPane = () => {
  return (
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
          scelerisque nunc at euismod venenatis. Donec sagittis iaculis est, in
          ultricies enim suscipit in. Ut condimentum ex sed arcu congue, eu
          luctus tellus commodo. Aenean suscipit, lorem vel tempus laoreet,
          neque nulla porttitor lorem, at laoreet ipsum tortor vel quam. Duis
          arcu nisi, scelerisque non dolor vitae, aliquam egestas orci. Nulla
          justo orci, maximus non sagittis sit amet, aliquet a ipsum. Praesent
          et dapibus sapien. Nullam feugiat augue quis quam tincidunt, a
          molestie ligula sodales. Fusce volutpat risus vel ullamcorper
          placerat.
        </p>
        <p>
          <Button type="primary">Rent</Button>
        </p>
      </div>
    </Col>
  );
};
