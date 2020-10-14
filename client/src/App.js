import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/header/Header'
import Auth from './pages/Auth'
import Profile from './pages/Profile';
import styled from 'styled-components'
const AppWrapper = styled.div`
  margin-top: 6rem;
`


class App extends Component {
  render() {
    return (
      <Router>
        <>
          <AppWrapper>
            <Header />
            <Switch>
              <Route exact path='/login' render={(props) => <Auth {...props} action="login" />} />
              <Route exact path="/signup" render={(props) => <Auth {...props} action="signup" />} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </AppWrapper>
        </>
      </Router>
    );
  }
}

export default App;
