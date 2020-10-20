import React, { Component } from 'react';
import { Container, Label, Card, CardTitle, CardText, Button } from 'reactstrap';
import Zoom from 'react-reveal/Zoom';



class Home extends Component {

    render() {
        return(
          <Container id='body-container' className='home-body'>
          <Zoom>
           <Card className='jumbotron'> 
               <CardTitle style={{fontSize: '30px', fontFamily: 'Nunito'}}>Lager Logger     <i class="fas fa-beer"></i></CardTitle>
               <CardText style={{fontSize: '20px', fontFamily: 'Nunito'}}> Continue Game Below</CardText>
               <hr/>
              <CardText style={{fontSize: '15px', fontFamily: 'Nunito'}}>Press Play to Continue</CardText>
            <Button href='/login'><i class="fas fa-play"></i></Button>

           </Card>
          </Zoom>      
         </Container>

        )
    }
}

export default Home;