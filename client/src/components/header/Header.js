import React, { Component } from 'react';
import { Container, Navbar, Row, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


export default class Header extends Component {

  render() {
    return (
      
        <Navbar className='nav' color="dark" dark>
        <Container>
          <Row>
            <NavbarBrand href="/">Lager Logger      <i class="fas fa-beer"></i></NavbarBrand>
          </Row>
            <Nav navbar className="navbar">
              <NavItem className="navbar-el">
                <NavLink href="/home">Home</NavLink>
              </NavItem>
              <NavItem className="navbar-el">
                <NavLink href="/login">Play Game</NavLink>
              </NavItem>
            
            </Nav>
          </Container>
        </Navbar>
      
    
    );
  }
}