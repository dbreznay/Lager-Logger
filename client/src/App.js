import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Auth from './pages/Auth';


 
class App extends Component {
  render() {
    return (
      <Router>
        <>
            <Header/>
          
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/home' component={Home} />
              <Route exact path='/login' render={(props) => <Auth {...props} action="login" />} />
              <Route exact path="/signup" render={(props) => <Auth {...props} action="signup" />} />

            </Switch>
        </>
      </Router>
    );
  }
}

export default App;
