import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route, BrowserRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import City from './City';

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
                <li><Link to={`/${city}`}>{city}</Link></li>
              ))}
            </ul>
          </div>

        </header>
              <Route path="/:cityName" component={City} />
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
