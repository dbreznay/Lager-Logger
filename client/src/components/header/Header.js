import React, { Component } from 'react';
import { Container, Nav, NavItem, NavLink } from 'reactstrap';

export default class Header extends Component {
  render() {
    return (
      
        <Navbar>
        <Container>
          <Row>
             <NavbarBrand href="/">Project 3</NavbarBrand>
          </Row>

            <Nav navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/create-game">Create Game</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">LogIn/LogOut</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/profile">Profile Page</NavLink>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      
    
    );
  }
}