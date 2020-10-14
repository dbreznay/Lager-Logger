import React, { Component } from "react";
import { Container, Form, FormText, FormGroup, Label, Input, Alert} from 'reactstrap';
import { Link } from "react-router-dom";


class Signup extends Component {
    state = {
        validUsername: false,
        validPassword: false,
        confirmPassword: false
    }

    componentDidUpdate() {
        this.validatePassword();
        this.confirmPassword();
        this.validateUsername();
    }

    validateUsername() {
        if(this.props.username.length > 1 && !this.state.validUsername) {
            this.setState({
                validUsername: true
            });
        }
        if(this.props.username.length <1 && this.state.validUsername) {
            this.setState({
                validUsername: false
            });
        }
    }

    validatePassword() {
        let strongPassword = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/);
        let valid = strongPassword.test(this.props.password);
        if (!this.state.validPassword && valid) {
            this.setState({
                validPassword: true
            });
        }
        if (this.state.validPassword && !valid) {
            this.setState({
                validPassword: false,
            });
        }
    }

    confirmPassword() {
        if(this.props.password === this.props.confirmPassword && !this.state.confirmPassword && this.props.password) {
            this.setState({
                confirmPassword: true
            });
        }
        if (this.props.password !== this.props.confirmPassword && this.state.confirmPassword) {
            this.setState({
                confirmPassword: false
            });
        }
    }

    render() {
        return(
            <StyledContainer>
                <h2 className="loginTitle title-font">Signup</h2>
                <hr />
                {this.props.message?(
                    <Alert className="animated fadeIn" color="danger">{this.props.message}</Alert>
                ) : (<></>)}
                <Form id="signup">
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" id="username" placeholder="username" value={this.props.username} onChange={this.props.handleInputChange} valid={this.state.validUsername} />
                    </FormGroup>
                    <FormGroup>
                    <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="password" value={this.props.password} onChange={this.props.handleInputChange} valid={this.state.validPassword} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="confirmPassword">Confirm Password</Label>
                        <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="confirm password" value={this.props.confirmPassword} onChange={this.props.handleInputChange} valid={this.state.confirmPassword} />
                        <FormText>at least 8 characters, 1 capital & 1 number</FormText>
                    </FormGroup>
                    <p className="signupLink">
                        <Link to="/login">already have an account?  Sign in here</Link>
                    </p>

                                        {/* if all fields are valid, allow the user to submit the form */}
                                        {(this.state.validUsername && this.state.validPassword && this.state.confirmPassword) ? (
                        <FormButton onClick={this.props.handleSignup} color="success" block>Signup</FormButton>
                    ) : (
                        <FormButton onClick={this.props.handleSignup} color="danger" block disabled>Signup</FormButton>
                    )}
                </Form>
            </StyledContainer>
        );
    }
}

export default Signup;