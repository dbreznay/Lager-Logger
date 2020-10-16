import React, { Component } from 'react';
import { Container, Navbar, Row, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


export default class Header extends Component {

  render() {
    return (
      
        <Navbar color="dark" dark>
        <Container>
          <Row>
             <NavbarBrand href="/">lagger-logger</NavbarBrand>
          </Row>
            <Nav navbar>
              <NavItem>
                <NavLink href="/">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/create-game">Create Game</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">LogIn/LogOut</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/profile">Profile Settings</NavLink>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      
    
    );
  }
}