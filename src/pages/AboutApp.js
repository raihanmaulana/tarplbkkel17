import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class AboutMe extends Component {
  render() {
      return (
        <div className="mt-1 text-center">
          <Image src="assets/images/landingpage.png" width="400" />
          <h2>Tentang Aplikasi</h2>
          <p>Website NFTShop ini merupakan tempat jual beli NFT seperti pada umumnya. Fitur yang ada yaitu user dapat menggunakan fitur keranjang, checkout, dan hanya bisa membeli 1 item per NFT</p>
          <Button variant="secondary" as={Link} to="/halamanutama">
          Back to home
        </Button>
        </div>
      );
    }
  }

