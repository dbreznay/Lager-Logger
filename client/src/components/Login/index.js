import React from "react";
import { Container, Form, FormGroup, Label, Input, Alert} from 'reactstrap';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    margin: 2rem auto;
    width: 100%;
    border: 1px solid white;
    border-radius: 5px;
    padding: 1rem 1rem 0 1rem;
    background-color: rgba(19, 18, 18, 0.671);
    backdrop-filter: blur(5px);   
    -webkit-backdrop-filter: blur(5px); 
`

const FormButton =  styled(Container)`
    background: transparent;
    backdrop-filter: blur(5px);   
    -webkit-backdrop-filter: blur(5px); 
    border: 1px solid rgb(25, 9, 45);
    border-radius: 5px;
    font-size: 1.5rem;
    height: 4rem;
    letter-spacing: 0.3rem;
    margin-left: -1rem;
    padding-top: 0.75rem;
    text-align: center;
    width: calc(100% + 2rem);
    
    &:hover{
        background-color: rgba(95, 5, 250, 0.75);
        backdrop-filter: blur(5px);   
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid white;
        cursor: pointer;
    }
        
`

function Login(props) {


    return (
        <StyledContainer>
            <div className="loginBox">
                <h2 className="loginTitle title-font">Login</h2>
                <hr/>
                {props.message ? (
                    <Alert className="animated fadeIn" color="danger">Please Sign In</Alert>
                ) : (<></>)}

                {props.loggedIn ? (
                    <FormButton id="logOutBtn" onClick={props.handleLogout} >Logout</FormButton>
                ) : (
                <>
                <Form id="login">
                    <FormGroup>
                        <Label for="username">Username</Label>
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
                <FormButton id="loginBtn" onClick={props.handleLogin} >Login</FormButton>
                </>
                )}
            </div>
        </StyledContainer>
    );
}

export default Login;