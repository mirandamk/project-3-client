import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:3000/home')
      .then((response) => {
        debugger;
        this.setState({ name: response.data });
      })
      .catch((err) => {
        debugger;
      });
  }
  render() {
    return (
      <div>
        <h1>Test page</h1>
        <>
          {this.state.name ? (
            <h1>{this.state.name.name}</h1>
          ) : (
            <h1>Loading...</h1>
          )}
        </>
      </div>
    );
  }
}

export default App;
