import React, { Component } from 'react';
import Cloud from './images/pci.jpg';
import Profile from './images/me.jpg';
import { Container, Col, Image, Button } from 'react-bootstrap';
import NavBar from './navBar';

class HomePage extends Component {
    render () {
        const backStyle = {
            backgroundImage: `url("${ Cloud }")`,
        };
        const Name = 'Jonathan Musila'

        return (
            <div className="Home" id="home">
                <div style={ backStyle }>
                    <Container>
                        <Col className="Greeting">
                            <div>
                                <Image className="Image" src={Profile} roundedCircle />
                            </div>
                            <div><u><strong>{Name}</strong></u></div>
                            <div className="Rowa">
                                <h2 className="animated bounceInRight">Hi,</h2>
                                <h3 className="animated bounceInLeft">I'm a full-stack web developer.</h3>
                                <Button variant="outline-primary" href="#projects"><span>View my work</span></Button>
                            </div>
                            <br />
                            <div></div>
                        </Col>
                    </Container>
                    <NavBar />
                </div>
            </div>
        );
    }
}

export default HomePage;