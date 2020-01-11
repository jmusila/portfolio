import React, { Component } from 'react';
import Portfolio from './images/portfolio.png';
import Questioner from './images/questioner.png';
import { Container, Card, CardGroup, Button } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';


class Projects extends Component {

    state = {
        isFlipped: false,
        isFlipped1: false,
        isFlipped2: false
    }

    handleOver = (e) => {
        const flip = this.state.isFlipped;
        this.setState({isFlipped: !flip});
    }

    handleOverCard1 = (e) => {
        const flip1 = this.state.isFlipped1;
        this.setState({isFlipped1: !flip1});
    }

    handleOverCard2 = (e) => {
        const flip2 = this.state.isFlipped2;
        this.setState({isFlipped2: !flip2});
    }

    handleOverBack = (e) => {
        const flip_back = this.state.isFlipped;
        this.setState({isFlipped: !flip_back})
    }

    handleOverBack1 = (e) => {
        const flip_back1 = this.state.isFlipped1;
        this.setState({isFlipped1: !flip_back1})
    }

    handleOverBack2 = (e) => {
        const flip_back2 = this.state.isFlipped2;
        this.setState({isFlipped2: !flip_back2})
    }

    render(){
        const backStyle = {
            backgroundColor: '#f2f2f2',
        }
        const cardone = (e)=>this.handleOver();
        const cardtwo = (e)=>this.handleOverCard1();
        const cardthree = (e)=>this.handleOverCard2();
        return (
            <div style={backStyle} id="projects">
                <Container>
                <u><h1 className="Project animated fadeInUpBig">Projects</h1></u>
                    <CardGroup className="animated fadeInDown">
                        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                        <Card border="primary" style={{ width: '22rem' }} onMouseEnter={cardone}>
                            <Card.Img variant="top" src={Portfolio} />
                        </Card>
                        <Card className="text-center" border="primary" style={{ width: '22rem' }} onMouseLeave={cardone}>
                            <Card.Title  className="Title">Portfolio</Card.Title>
                            <Card.Text className="CardText">
                                React Js
                            </Card.Text>
                            <Button variant="outline-primary">View Project</Button>
                        </Card>
                        </ReactCardFlip>

                        <ReactCardFlip isFlipped={this.state.isFlipped1} flipDirection="horizontal">
                        <Card border="primary" style={{ width: '22rem' }} onMouseEnter={cardtwo}>
                            <Card.Img variant="top" src={Questioner} />
                        </Card>
                        <Card className="text-center" border="primary" style={{ width: '22rem' }} onMouseLeave={cardtwo}>
                            <Card.Title className="Title">Questioner</Card.Title>
                            <Card.Text className="CardText">
                                Python/Flask & Javascript
                            </Card.Text>
                            <Button variant="outline-primary">View Project</Button>
                        </Card>
                        </ReactCardFlip>

                        <ReactCardFlip isFlipped={this.state.isFlipped2} flipDirection="horizontal">
                        <Card border="primary" style={{ width: '22rem' }} onMouseEnter={cardthree}>
                            <Card.Img variant="top" src={Portfolio} />
                        </Card>
                        <Card className="text-center" border="primary" style={{ width: '22rem' }} onMouseLeave={cardthree}>
                            <Card.Title  className="Title">Portfolio</Card.Title>
                            <Card.Text className="CardText">
                                React Js
                            </Card.Text>
                            <Button variant="outline-primary">View Project</Button>
                        </Card>
                        </ReactCardFlip>
                    </CardGroup>
                    <div className="Empty"></div>
                </Container>
            </div>
        );
    }
}

export default Projects;