import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../utils/constants";

export default class AboutMe extends Component {
render() {
    return (
      <div className="mt-1 text-center">
        <Image src="assets/images/raihan.jpg" width="280" />
        <h2>Tentang Developer</h2>
        <p>Seorang Mahasiswa Teknik Komputer Angkatan 2020</p>
        <Button variant="secondary" as={Link} to="/halamanutama">
          Back to home
        </Button>
      </div>
    );
  }
}