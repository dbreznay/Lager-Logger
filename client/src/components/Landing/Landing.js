import React, { Component } from 'react';
import { Container, Label, Card, CardTitle, CardText, Button } from 'reactstrap';
import Zoom from 'react-reveal/Zoom';



class Landing extends Component {

    render() {
        return(
          <Container id='body-container' className='home-body'>
           <Zoom>
            <Card className='jumbotron'> 
                <CardTitle style={{fontSize: '30px', fontFamily: 'Nunito'}}>Welcome to Lager Logger    <i class="fas fa-beer"></i></CardTitle>
                <CardText style={{fontSize: '20px', fontFamily: 'Nunito'}}>The online drinking game for the whole squad !</CardText>
                <hr/>
             <Label className='text-left' style={{fontSize: '18px', fontFamily: 'Nunito'}}>
                <ul>
                  <li>Play with friends anywhere</li>
                  <li>On Zoom or Facetime</li>
                  <li>Or in person! (after the quarentine of course)</li>
                </ul>
             </Label>
               <hr/>
               <CardText style={{fontSize: '15px', fontFamily: 'Nunito'}}>Log in or Sign Up to Play</CardText>
             <Button colored href='/login'>Log in</Button>

            </Card>
           </Zoom>      
          </Container>

        )
    }
}

export default Landing;