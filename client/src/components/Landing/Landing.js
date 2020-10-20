import React, { Component } from 'react';
import { Container, Label } from 'reactstrap';



class Landing extends Component {

    render() {
        return(
          <Container className='home-body'>

            <Label className='jumbotron' style={{fontSize: '30px', fontFamily: 'Nunito'}}> 
              <h1>Welcome to the Lager-Logger</h1>
              </Label>
            
                 
          </Container>

        )
    }
}

export default Landing;