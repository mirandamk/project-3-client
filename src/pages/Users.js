import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/user')
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
        <h1>User page</h1>
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

export default User;
