import React, { Component } from 'react';
import './Catalogue.css';

class Catalogue extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header">
        <input type="text" placeholder="search here ..."></input>
        </header>
        <table>
            <tr>
              <th>Name</th>&nbsp;
              <th>Price</th>&nbsp;
              <th>SKU</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>officia ex</td>&nbsp;
              <td>156.35</td> &nbsp;
              <td>624c5890</td>
              <td>sint ipsum ipsum culpa nisi ullamco ad Lorem sit exercitation velit et ut dolore tempor<img className="Img" src="https://i.imgur.com/qvDtKQ7.png"></img><img className="Img" src="https://i.imgur.com/DAfa6fR.png"></img></td>
            </tr>
            <tr>
              <td>officia ex</td>&nbsp;
              <td>156.35</td> &nbsp;
              <td>624c5890</td>
              <td>sint ipsum ipsum culpa nisi ullamco ad Lorem sit exercitation velit et ut dolore tempor<img className="Img" src="https://i.imgur.com/qvDtKQ7.png"></img><img className="Img" src="https://i.imgur.com/DAfa6fR.png"></img></td>
            </tr>
            <tr>
              <td>officia ex</td>&nbsp;
              <td>156.35</td> &nbsp;
              <td>624c5890</td>
              <td>sint ipsum ipsum culpa nisi ullamco ad Lorem sit exercitation velit et ut dolore tempor<img className="Img" src="https://i.imgur.com/qvDtKQ7.png"></img><img className="Img" src="https://i.imgur.com/DAfa6fR.png"></img></td>
            </tr>
            <tr>
              <td>officia ex</td>&nbsp;
              <td>156.35</td> &nbsp;
              <td>624c5890</td>
              <td>sint ipsum ipsum culpa nisi ullamco ad Lorem sit exercitation velit et ut dolore tempor<img className="Img" src="https://i.imgur.com/qvDtKQ7.png"></img><img className="Img" src="https://i.imgur.com/DAfa6fR.png"></img></td>
            </tr>
          </table>
      </div>
    );
  }
}

export default Catalogue;