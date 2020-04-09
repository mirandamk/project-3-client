import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/users')
      .then((response) => {
        this.setState({ users: response.data });
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let users = this.state.users;
    return (
      <div className="App">
        <p>Hey, you are in user page</p>
        {users.map((user) => {
          return <h1>{user.firstName}</h1>;
        })}
      </div>
    );
  }
}

export default User;
