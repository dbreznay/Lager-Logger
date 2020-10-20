import React, { Component } from 'react';
import Counter from "../Counter/Counter";
import Chat from '../Chat/Chat';
import { Container, Label, Row, Col } from 'reactstrap';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';


class Game extends Component {

    render() {
        return(
          <Container id="body-container" className='game-body'>
            <Zoom>
            <Label className='jumbotron' style={{fontSize: '30px', fontFamily: 'Nunito'}}> 
              <h1>Click to deal the cards!</h1>
              </Label>
              </Zoom>
              <hr/>
              <Flip>
              <Container>
                <Row>
                  <Col>
                    <Container>
                      <Row>
                        <Col>
                        <a type="button" onClick={load} className="facedown-cards">
                        </a>
                        </Col>
                        <Col id='deck'></Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Container>
              </Flip>
              <br></br>
              <Zoom>
              <Container>
                  <Row >
                    <Col className='jumbotron'>
                      <div style={{fontSize: '25px', fontFamily: 'Nunito'}} id='rules'>Rules</div>
                    </Col>
                  </Row>
              </Container>
              </Zoom>
              <Container>
                  <Row className='counter-body'>
                    <Counter />
                  </Row>
              </Container>
              <Container>
                <Chat />
      
                {/* <Row>
                  <Col className='chat-section md-12 text-center border boder-dark'>
                <div>Chat Will Go Right Here</div>
                <div>Chat Will Go Right Here</div>
                <div>Chat Will Go Right Here</div>
                <div>Chat Will Go Right Here</div>
                <div>Chat Will Go Right Here</div>
                  </Col>
                </Row> */}
              </Container>
              <hr></hr>
              {/* <Container>
                <Row>
                  <Col className='md-12 d-flex justify-content-center'>
                    <Button type="button" onClick={shuffle} className="btn btn-dark">DEAL THE CARDS</Button>
                  </Col>
                </Row>
              </Container> */}




          </Container>

        )
    }
}

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suits = ["diamonds", "hearts", "spades", "clubs"];
let deck = new Array();

function getDeck()
{
  let deck = new Array();

  for(let i = 0; i < suits.length; i++)
  {
    for(let x = 0; x < cards.length; x++)
    {
      let card = {Value: cards[x], Suit: suits[i]};
      deck.push(card);
    }
  }

  return deck;
}

function shuffle()
{
  // for 1000 turns
  // switch the values of two random cards
  for (let i = 0; i < 1000; i++)
  {
    let location1 = Math.floor((Math.random() * deck.length));
    let location2 = Math.floor((Math.random() * deck.length));
    let tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }

  renderDeck();
}

function renderDeck()
{
  document.getElementById('deck').innerHTML = '';
  for(let i = 0; i < 1; i++)
  {
    let card = document.createElement("div");
    let rules = document.querySelector('#rules');
    let value = document.createElement("div");
    let suit = document.createElement("div");
    card.className = "card";
    value.className = "value";
    suit.className = "suit " + deck[i].Suit;
    
    switch (card.innerHTML = deck[i].Value) {
      case 'A':
        rules.innerHTML = 'Bottoms UP for 5 seconds! If on a zoom call chug until the person to your left stops chuggin!';
        break;
      case '2':
        rules.innerHTML = 'YOU get to choose who drinks!';
        break;
      case '3':
        rules.innerHTML = 'Three is ME, baby. drink up!';
        break;
      case '4':
        rules.innerHTML = 'Four is FLOOR! Last person to type and send "floor" in the chat drinks.';
        break;
      case '5':
        rules.innerHTML = 'Five is GUYS. Fellas take a drink.';
        break;
      case '6':
        rules.innerHTML = 'Six is CHICKS. Ladies you know what to do.';
        break;
      case '7':
        rules.innerHTML = 'Seven is HEAVEN. Last person to type and send "heaven" in the chat drinks.';
        break;
      case '8':
        rules.innerHTML = 'Eight is MATE. Pick someone else to be your mate and when one of you sips the other must as well.';
        break;
      case '9':
        rules.innerHTML = 'Nine is RHYME. DONT GET COCKY.. Its harder when you drink. The person to your right rhymes with your word and whoever messes up must drink.';
        break;
      case '10':
        rules.innerHTML = 'Ten is CATEGORIES. Pick a category and go around the table until someone cant come up with an answer.';
        break;
      case 'J':
        rules.innerHTML = 'Jack is NEVER-HAVE-I-EVER. Three fingers up.. Go around the table and whoever is left with no fingers first must sip sip sip!';
        break;
      case 'Q':
        rules.innerHTML = 'Queen is QUESTIONS. You pose a question to anyone in the game. They in turn answer your question with a question. This goes around until someone does not respond with a question.';
        break;
      case 'K':
        rules.innerHTML = 'King is RULE. Pick a rule and whoever breaks that rule must drink. Once another king card is drawn a new rule will be in place.';
        break;
      default:
        console.log('wanna play a game?');
      }
      console.log("Wanna donate to an organization?");

    // value.innerHTML = deck[i].Value;
    card.appendChild(value);
    card.appendChild(suit);
    // card.appendChild(deck[i].Value);

    document.getElementById("deck").appendChild(card);
  }
}

function load()
{
  deck = getDeck();
  shuffle();
  renderDeck();
}

export default Game;