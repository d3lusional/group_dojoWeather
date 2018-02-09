import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route, BrowserRouter} from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Dojo Weather Forecast</h1>
          <div>
            <ul>
              { this.props.cities.map((city) => (
                <li><Link to="/:cityName">{city}</Link></li>
              ))}
            </ul>
          </div>

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => { 
  return {
    cities: state.cities 
  }
}

export default connect(mapStateToProps)(App);
