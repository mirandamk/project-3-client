import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import axios from 'axios';
import Assign from './pages/Assign.js';
import User from './pages/User.js';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
      
    this.state = {
      // users: []
    };
  }

  // componentDidMount() {
  //   axios
  //     .get('http://localhost:3000')
  //     .then((response) => {
  //       this.setState({ users: response.data });
  //       console.log(response.data)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     });
  // }
  render() {
    return (
      <div>
        <h1>Test page</h1>
        <Switch>
          <Route path="/user" component={User}></Route>
          <Route path="/assignment" component={Assign}></Route>
        </Switch>
      </div>
    ); 
  }
}
      

export default App;
