import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { BackTop } from "antd";
import Github from './images/github-image-796x418.png';
import LinkedIN from './images/linkedin.png'

class Footer extends Component {
  render() {
    const backStyle = {
      backgroundColor: "#f2f2f2"
    };
    return (
      <div style={backStyle}>
        <Container className="Footer">
          <BackTop />
          <h6>JONATHAN MUSILA @2020</h6>
        </Container>
      </div>
    );
  }
}

export default Footer;
