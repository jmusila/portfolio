import React, { Component } from 'react';
import Api from './images/Api.jpg';
import { Container, Row, Col, ProgressBar, Image } from 'react-bootstrap';


class About extends Component {

    render () {
        const html = 90;
        const css = 80; 
        const react = 70;
        const python = 80;
        const js = 70;
        const flask = 80;
        const django = 70;
        const php = 70;
        const UI = 50;
        return (
            <div id="about">
                <u><h1 className="About animated fadeInUpBig">About</h1></u>
                <Container>
                <Row>
                    <Col className="animated bounceInLeft">
                        <div className="Progress">   
                            CSS<ProgressBar animated now={css} label={`${css}%`} />
                        </div>
                        <div className="Progress">
                            HTML<ProgressBar animated now={html} label={`${html}%`}/>
                        </div>
                        <div className="Progress">
                            React<ProgressBar animated now={react} label={`${react}%`}/>
                        </div>
                        <div className="Progress">
                            Python<ProgressBar animated now={python} label={`${python}%`}/>
                        </div>
                        <div className="Progress">
                            Javascript<ProgressBar animated now={js} label={`${js}%`}/>
                        </div>
                        <div className="Progress">
                            Flask<ProgressBar animated now={flask} label={`${flask}%`}/>
                        </div>
                        <div className="Progress">
                            Django<ProgressBar animated now={django} label={`${django}%`}/>
                        </div>
                        <div className="Progress">
                            UI Design<ProgressBar animated now={UI} label={`${UI}%`}/>
                        </div>
                        <div className="Progress">
                            PHP<ProgressBar animated now={php} label={`${php}%`}/>
                        </div>
                    </Col>
                    <Col className="Greeting1 animated bounceInRight">
                        <div>
                            <strong>Who's this guy?</strong>
                            <br />
                            I'm full-stack web developer passionate about new technologies.
                            <br />
                            I have serious passion for backend API'S and
                            <br />
                            creating dynamic user experinces.
                            <div className="Api">
                                <Image className="Image2" src={Api} rounded />
                                <br />
                                Stable API'S and responsive websites
                                <br /> 
                                Fast load time is my highest priority
                            </div>
                        </div>
                    </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;