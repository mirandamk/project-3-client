import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import Signup from './Signup.js';
import { Switch, Route, Link } from 'react-router-dom';

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
        <h1>Homepage for logged in user</h1>
        <div className="App">
          {users.map((user) => {
            return (
              <>
                <div>
                  <h1>Welcome, {user.firstName}</h1>
                </div>
              </>
            );
          })}
        </div>
        <div>Link to "Change profile"</div>
        <div>Link to "Information study abroad"</div>
        <div>Link to "Start assignments"</div>
        <div>Link to "Results"</div>

        <Switch>
          <Route path="/signup" component={Signup}/>
        </Switch>
        <Link to="/signup">Go to Signup</Link>
      </div>
    );
  }
}

export default User;
