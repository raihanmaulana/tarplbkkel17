import React, { Component, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Hasil, ListCategories, Produks } from "../components";
import { API_URL } from "../utils/constants";
import axios from "axios";
import swal from "sweetalert";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      produks: [],
      categoriYangDipilih: "Art",
      keranjangs: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products?category.nama=" + this.state.categoriYangDipilih)
      .then((res) => {
        const produks = res.data;
        this.setState({ produks });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });

    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        this.setState({ keranjangs });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  }

  componentDidUpdate(prevState) {
    if (this.state.keranjangs !== prevState.keranjangs) {
      axios
        .get(API_URL + "keranjangs")
        .then((res) => {
          const keranjangs = res.data;
          this.setState({ keranjangs });
        })
        .catch((error) => {
          console.log("Error yaa ", error);
        });
    }
  }

  changeCategory = (value) => {
    this.setState({
      categoriYangDipilih: value,
      produks: [],
    });

    axios
      .get(API_URL + "products?category.nama=" + value)
      .then((res) => {
        const produks = res.data;
        this.setState({ produks });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  };

  masukKeranjang = (value) => {
    axios
      .get(API_URL + "keranjangs?product.id=" + value.id)
      .then((res) => {
        if (res.data.length === 0) {
          const keranjang = {
            jumlah: 1,
            total_harga: value.harga,
            product: value,
          };
          swal({
            text:
              "Nama produk: " +
              keranjang.product.nama +
              "\n" +
              "Harga produk: " +
              keranjang.product.harga +
              "\n",
            buttons: {
              cancel: "Batal",
              
              tambah: true,
            },
          }).then((value) => {
            switch (value) {
              case "tambah":
                axios
                  .post(API_URL + "keranjangs", keranjang)
                  .then((res) => {
                    swal({
                      title: "Sukses Masuk Keranjang",
                      text: "Sukses Masuk Keranjang " + keranjang.product.nama,
                      icon: "success",
                      button: false,
                      timer: 1500,
                    });
                  })
                  .catch((error) => {
                    console.log("Error yaa ", error);
                  });
                break;

              default:
            }
          });
        } else {
          swal("Produk Telah Dipilih!");
        }
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  };

  render() {
    const { produks, categoriYangDipilih, keranjangs } = this.state;
    return (
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories
              changeCategory={this.changeCategory}
              categoriYangDipilih={categoriYangDipilih}
            />
            <Col className="mt-3">
              <h4>
                <strong>Daftar NFT</strong>
              </h4>
              <hr />
              <Row className="overflow-auto produk">
                {produks &&
                  produks.map((produk) => (
                    <Produks
                      key={produk.id}
                      produk={produk}
                      masukKeranjang={this.masukKeranjang}
                    />
                  ))}
              </Row>
            </Col>
            <Hasil keranjangs={keranjangs} {...this.props} />
          </Row>
        </Container>
      </div>
    );
  }
}
