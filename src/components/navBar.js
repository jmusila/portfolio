import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Affix } from 'antd';

class navBar extends Component {
    state = {
        top: 0,
      };
    render(){
        return (
            <div>  
            <Affix offsetTop={this.state.top}> 
            <Navbar bg="dark" variant="dark">
                <Nav className="flex">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Nav.Link href="#projects">Portfolio</Nav.Link>
                </Nav>
            </Navbar>
            </Affix>
            </div>
        );
    }
}

export default navBar;