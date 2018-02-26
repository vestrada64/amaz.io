import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Checkout.css';

class Checkout extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
            <Link to='/catalogue'>Back to Catalogue</Link>
        </Switch>
      </Router>
        <table>
            <tr>
              <th>Item</th>&nbsp;
              <th>Cost</th>&nbsp;
              <th>Qty.</th>
            </tr>
            <tr>
              <td>officia ex</td>&nbsp;
              <td>156.35</td> &nbsp;
              <td>2</td>
            </tr>
            <tr>
              <td>officia ex</td>&nbsp;
              <td>156.35</td> &nbsp;
              <td>1</td>
            </tr>
          </table>
      </div>
    );
  }
}

export default Checkout;