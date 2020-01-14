import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { BackTop } from "antd";

class Footer extends Component {
  render() {
    const backStyle = {
        backgroundColor: "#a6a6a6"
    };
    return (
      <div style={backStyle}>
        <Container className="Footer">
          <b>&copy; 2020 Jonathan Musila</b>
                <BackTop />
        </Container>
      </div>
    );
  }
}

export default Footer;
