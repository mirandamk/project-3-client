import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
      
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000')
      .then((response) => {
        this.setState({ users: response.data });
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      });
  }
  render() {
    let users = this.state.users;
    return (
      <div>
        <h1>Test page</h1>
        <div className="App">
        {users.map((user) => {
          return(
               <h1>{user.firstName}</h1>
          )
        })}
        </div>
      </div>
    ) 
  }
}
      

export default App;
