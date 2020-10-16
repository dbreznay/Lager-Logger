import React, { Component } from 'react';
import { Container, Button, Input, Form, FormGroup, Label, Row, Col } from 'reactstrap';


class Game extends Component {
    render() {
        return(
          <Container>


              <h1 className='text-center'>Welcome to the Lager-Logger.</h1>
              <h3 className='text-center'>Click to deal the cards.</h3>
              <Container className='border border-dark p-3 '>
                <Row>
                  <Col>
                    <Container>
                      <Row>
                        <Col className='md-6 text-center border border-dark p-3'>Card face down</Col>
                        <Col className='md-6 text-center border border-dark p-3'>Card face up</Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Container>
              <br></br>
              <Container>
                  <Row>
                    <Col className='md-6 text-center p-3 border boder-dark'>
                      <div>Card Rulles will go here</div>
                    </Col>
                  </Row>
              </Container>
              <hr></hr>
              <Container>
                  <Row>
                    <Col className='md-4'>
                      <div className='text-center'>Drink Counter: </div>
                    </Col>
                    <Col className='md-4 d-flex justify-content-center'>
                    <Button>+</Button>
                    <Button>-</Button>
                    </Col>
                    <Col>
                      <div className='text-center'>#</div>
                    </Col>
                  </Row>
              </Container>
              <hr></hr>
              <Container>
                <Row>
                  <Col className='md-12 text-center border boder-dark'>
                <div>Chat Will Go Right Here</div>
                <div>Chat Will Go Right Here</div>
                <div>Chat Will Go Right Here</div>
                <div>Chat Will Go Right Here</div>
                <div>Chat Will Go Right Here</div>
                  </Col>
                </Row>
              </Container>
              <hr></hr>
              <Container>
                <Row>
                  <Col className='md-12 d-flex justify-content-center'>
                    <Button type="button" className="btn btn-dark">DEAL THE CARDS</Button>
                  </Col>
                </Row>
              </Container>




          </Container>

        )
    }
}

export default Game;