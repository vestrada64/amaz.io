import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './../App/App.css';
import Catalogue from './../Catalogue/Catalogue';
import Checkout from './../Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Router>
            <Switch>
          <Link to='/'><h1 className="Amazio">Amaz.io</h1></Link>
          </Switch>
          </Router>
          <Router>
          <Switch>
          <Link to='/checkout'><img src="https://i.imgur.com/FKaMPby.png"></img></Link>
          </Switch>
          </Router>
        </header>
        <Router>
          <Switch>
        <Link to='/catalogue'>Get Started</Link>
        </Switch>
        </Router>
        <Router>
          <Switch>
            <Route exact path='/catalogue' render={() =>
            <Catalogue />
            }/>
            <Route exact path='/checkout' render={() =>
            <Checkout />
            }/>
          </Switch>
        </Router>
      </div>
    );
  }
};

export default App;