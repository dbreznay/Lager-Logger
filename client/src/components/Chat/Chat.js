import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardFooter,
  Container,
  Button,
  Input,
  Form,
  FormGroup,
  Label,
  Row,
  Col,
} from "reactstrap";
import io from "socket.io-client";
import Zoom from 'react-reveal/Zoom';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      message: "",
      messages: [],
    };

    this.socket = io("localhost:3002");

    this.socket.on("RECEIVE_MESSAGE", function(data) {
      addMessage(data);
    });

    const addMessage = (data) => {
      console.log(data);
      this.setState({ messages: [...this.state.messages, data] });
      console.log(this.state.messages);
    };

    this.sendMessage = (ev) => {
      ev.preventDefault();
      this.socket.emit("SEND_MESSAGE", {
        author: this.state.username,
        message: this.state.message,
      });
      this.setState({ message: "" });
    };
  }
  render() {
    return (
      <Zoom>
      <Container>
        <Row>
          <Col >
            <Card className="chat-box">
              <CardBody>
                <CardTitle>Let's chat!</CardTitle>
                <hr />
                <div className="messages">
                  {this.state.messages.map((message) => {
                    return (
                      <div>
                        {message.author}: {message.message}
                      </div>
                    );
                  })}
                </div>
              </CardBody>
              <CardFooter>
                <FormGroup>
                  <Input
                    type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={(ev) =>
                      this.setState({ username: ev.target.value })
                    }
                    className="form-control"
                  ></Input>
                  <br />
                  <Input
                    type="text"
                    placeholder="Message"
                    className="form-control"
                    value={this.state.message}
                    onChange={(ev) =>
                      this.setState({ message: ev.target.value })
                    }
                  ></Input>
                  <br />
                  <Button onClick={this.sendMessage} className="form-control">
                    Send
                  </Button>
                </FormGroup>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
      </Zoom>
    );
  }
}

export default Chat;
