import React, { Component } from 'react';
import { Container, Button, Input, Form, FormGroup, Label } from 'reactstrap';


class Game extends Component {
    render() {
        return(
          <Container>
               <h1>A Deck of Cards</h1>
            <Button color="link">Shuffle</Button>
            <Form> 
              <FormGroup>    
                <Label for="sendMessage">Send Message</Label>
                <Input type="textarea" name="text" id="sendMessage" placeholder="Name" />
              </FormGroup>
              <FormGroup>
                <Label for="messageText" placeholder="Your Message Here"></Label>
                <Input type="textarea" name="text" id="messageText" />
              </FormGroup>
            <Button id='send'>Send</Button>
           </Form>
           
          </Container>

        )
    }
}

export default Game;