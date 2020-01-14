import React, { Component } from 'react';
import Portfolio from './images/portfolio.png';
import Questioner from './images/questioner.png';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


class Projects extends Component {

    render(){
        const backStyle = {
            backgroundColor: '#f2f2f2',
        }

        return (
            <div style={backStyle} id="projects">
                <Container>
                <u><h1 className="Project animated fadeInUpBig">Projects</h1></u>
                <Row>
                    <Col>
                        <Card style={{ width: 'auto' }}>
                            <Card.Img variant="top" src={Portfolio} />
                            <Card.Body>
                                <Card.Title>Questioner</Card.Title>
                                <Card.Text>
                                    Questioner web app build using HTML, CSS and Javascript. The application backend is build using Python/Flask and PostgreSQL.
                                </Card.Text>
                                    <Card.Link href="https://jonathanmusila.github.io/Questioner/UI/">View Project</Card.Link>
                                    <Card.Link href="https://github.com/jonathanmusila/Questioner/tree/gh-pages">View Code</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: 'auto' }}>
                            <Card.Img variant="top" src={Portfolio} />
                            <Card.Body>
                                <Card.Title>Store Manager</Card.Title>
                                <Card.Text>
                                    Store Manager web app build using HTML, CSS and Javascript. The application backend is build using Python/Flask and PostgreSQL.
                            </Card.Text>
                                    <Card.Link href="#">View Project</Card.Link>
                                    <Card.Link href="#">View Code</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div className="Project"></div>
                </Container>
            </div>
        );
    }
}

export default Projects;