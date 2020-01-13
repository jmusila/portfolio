import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import { BackTop } from "antd";
import Github from './images/github-image-796x418.png';
import LinkedIn from './images/linkedin.png'

class Footer extends Component {
  render() {
    const backStyle = {
      backgroundColor: "#f2f2f2"
    };
    const ImageStyle = {
        height: "70px",
        width: "100px"
    }
    return (
      <div style={backStyle}>
        <Container className="Footer">
            <div className="IconsStyle">
                <Image style={ImageStyle} src={Github} thumbnail />
                <Image style={ImageStyle} src={LinkedIn} thumbnail /> 
            </div>
          <b>JONATHAN MUSILA @2020</b>
                <BackTop />
        </Container>
      </div>
    );
  }
}

export default Footer;
