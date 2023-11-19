import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class LandingPage extends Component {

  render() {
    return (
      <div className="mt-1 text-center">
        <Image src="assets/images/landingpage.png" width="400" />
        <h2>Welcome To NFTShop!</h2>
        <p>Anda ingin kemana?</p>
        <Button variant="primary" as={Link} to="/home">
          Belanja!
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="primary" as={Link} to="/aboutme">
          About Me
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="primary" as={Link} to="/aboutapp">
          About App
        </Button>
      </div>
    );
  }
}