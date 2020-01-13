import React, { Component } from 'react';
import { Container, Col, Form, Button, Row } from 'react-bootstrap';

class Contacts extends Component {
    render() {
        const backStyle = {
            backgroundColor: '#d9d9d9'
        }
        return (
            <div style={backStyle} id="contact">
                <u><h1 className="About">Contact</h1></u>
                <Container className="FormPlace">
                    <Row>
                    <Col></Col>
                        <Col xs={7} className="Contact">
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
                    <Col></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Contacts;