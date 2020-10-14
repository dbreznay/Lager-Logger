import React, { Component } from 'react';
import { Container, Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Header extends Component {

  render() {
    return (
      
        <StyledNavbar color="dark" dark>
        <Container>
          <StyledRow>
             <StyledNavbarBrand href="/">Project 3</StyledNavbarBrand>
          </StyledRow>

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
        </StyledNavbar>
      
    
    );
  }
}