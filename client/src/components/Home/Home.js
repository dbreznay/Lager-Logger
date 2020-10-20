import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Label } from 'reactstrap';



class Home extends Component {

    render() {
        return(
          <Container id="body-container" className='home-body'>

            <Label className='jumbotron' style={{fontSize: '30px', fontFamily: 'Nunito'}}> 
              <h1>Welcome to Lager Logger!</h1>
              <h3>Log in or Sign Up to play!</h3>
              <Link to='/login' style={{fontSize: '15px', fontFamily: 'Nunito'}} > Log in!</Link>
              </Label>
            
                 
          </Container>

        )
    }
}

export default Home;