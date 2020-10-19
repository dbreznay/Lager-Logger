import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Game from './components/Game/index';
import './App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Auth from './pages/Auth';


 
class App extends Component {
  render() {
    return (
      <Router>
        <>
            <Header/>
          
            <Switch>
              <Route exact path='/home' component={Home} />
              <Route exact path='/login' render={(props) => <Auth {...props} action="login" />} />
              <Route exact path="/signup" render={(props) => <Auth {...props} action="signup" />} />
              <Route exact path="/game" component={Game} />

            </Switch>
        </>
      </Router>
    );
  }
}

export default App;
