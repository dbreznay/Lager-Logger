import React, { Component } from 'react';
import { Container, Navbar, Row, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


export default class Header extends Component {

  render() {
    return (
      
        <Navbar color="dark" dark>
        <Container>
          <Row>
             <NavbarBrand href="/">lager-logger</NavbarBrand>
          </Row>
            <Nav navbar className="navbar">
              <NavItem className="navbar-el">
                <NavLink href="/">Dashboard</NavLink>
              </NavItem>
              <NavItem className="navbar-el">
                <NavLink href="/create-game">Create Game</NavLink>
              </NavItem>
              <NavItem className="navbar-el">
                <NavLink href="/login">LogIn/LogOut</NavLink>
              </NavItem>
              <NavItem className="navbar-el">
                <NavLink href="/profile">Profile Settings</NavLink>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      
    
    );
  }
}