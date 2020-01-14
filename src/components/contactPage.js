import React, { Component } from 'react';
import { Container, Col, Form, Button, Row } from 'react-bootstrap';
import { Icon } from 'antd';

class Contacts extends Component {
    render() {
        const backStyle = {
            backgroundColor: '#d9d9d9'
        }
        const IconStyle = {
            fontSize: '30px'
        }
        return (
            <div style={backStyle} id="contact">
                <u><h1 className="About">Contact</h1></u>
                <Container className="FormPlace">
                    <Row>
                        <Col sm={8} className="Contact">
                        <h6>Have a question or want to work together?</h6>
                        <br/>
                        <Form className="FormAlign" action="https://formspree.io/mbjglayk" method="POST">
                        <Form.Group>
                                    <Form.Control input type="text" name="name" placeholder="Name" />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                                    <Form.Control input type="email" name="_replyto" placeholder="Enter email" />
                        </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control name="message" as="textarea" rows="3" placeholder="Your Message" />
                            </Form.Group>
                                <Button className="Submit" variant="primary" input type="submit" value="Send">
                            Submit
                        </Button>  
                    </Form>
                    </Col>
                    <Col sm={4} className="Contact">
                        <h5><u>My Contacts</u></h5>
                        <br/>
                        <Icon style={IconStyle} type="phone" theme="twoTone" />
                        :  +254 792 707 312
                        <br/>
                            <br />
                        <Icon style={IconStyle} type="github" theme="filled" />
                        :  Github Profile
                        <br/>
                            <br />
                        <Icon style={IconStyle} type="linkedin" theme="filled" />
                        :  LinkedIn Profile
                    </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Contacts;