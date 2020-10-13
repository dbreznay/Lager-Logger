import React, { Component } from 'react';
import { Container, Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  justify-content: left;
`
const StyledRow = styled.div `
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const StyledNavbarBrand = styled(NavbarBrand)`
  /* color: rgba(95, 5, 250, 1); */
  font-family: 'Fredericka the Great', cursive;
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 0.35rem;
  /* margin-right: 3rem; */
  padding: 0;

`

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