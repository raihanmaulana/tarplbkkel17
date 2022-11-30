import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";


export default class LandingPage extends Component {

  render() {
    return (
      <div className="mt-1 text-center">
        <Image src="assets/images/landingpage.png" width="400" />
        <h2>NFT Shop</h2>
        <p>Selamat Berbelanja</p>
        <Button variant="primary" as={Link} to="/home">
          Buy
        </Button>
      </div>
    );
  }
}
