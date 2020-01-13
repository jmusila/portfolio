import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import { BackTop } from "antd";
import Github from './images/github-image-796x418.png';
import LinkedIn from './images/linkedin.png'

class Footer extends Component {
  render() {
    const backStyle = {
        backgroundColor: "#a6a6a6"
    };
    const ImageStyle = {
        height: "40px",
        width: "50px"
    }
    return (
      <div style={backStyle}>
        <Container className="Footer">
            <div className="IconsStyle">
                <Image style={ImageStyle} src={Github} />
                <Image style={ImageStyle} src={LinkedIn} /> 
            </div>
          <b>JONATHAN MUSILA @2020</b>
                <BackTop />
        </Container>
      </div>
    );
  }
}

export default Footer;
