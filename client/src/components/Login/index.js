import React from "react";
import { Container, Form, FormGroup, Label, Input, Alert, Button} from 'reactstrap';
import { Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';

function Login(props) {


    return (
        <Container id='body-container' className='login-body'>
            <Zoom>
            <div className="loginBox">
                <h2 style={{fontSize: '50px', fontFamily: 'Nunito'}}>Log in</h2>
                <hr/>
                {props.message ? (
                    <Alert className="animated fadeIn" color="danger">Please Sign In</Alert>
                ) : (<></>)}

                {props.loggedIn ? (
                    <Button id="logOutBtn" onClick={props.handleLogout} >Logout</Button>
                ) : (
                <>
                <Form id="login" style={{fontSize: '20px', fontFamily: 'Nunito'}} >
                    <FormGroup>
                        <Label for="username" >Username</Label>
                        <Input type="text" name="username" id="username" placeholder="username" value={props.username} onChange={props.handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="password" value={props.password} onChange={props.handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        
                        <p className="signupLink">
                            <Link to="/signup">Don't have an account? Sign up here.</Link>
                        </p>
                    </FormGroup>
                </Form>
                <Button id="loginBtn" style={{fontSize: '18px', fontFamily: 'Nunito'}} onClick={props.handleLogin} >Login</Button>
                </>
                )}
            </div>
            </Zoom>
        </Container>
    );
}

export default Login;