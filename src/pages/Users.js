import React, { Component } from 'react';
import './stylesheets/Users.css';
import axios from 'axios';
import Signup from './Signup.js';
import { Switch, Route, Link } from 'react-router-dom';


class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/user')
      .then((response) => {
        this.setState({ users: response.data });
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    // let users = this.state.users;
    return (
      <article className="bg">
              {/* <div className="App">
      <article className="media">
        {/* <div className="media-content"> */}
        {/* <div className="content"> */}
        {/* <div> */}
        {/* <h1>
                Homepage for buttons of signup and login-buttons. (take out
                later)
              </h1>
              <div className="App">
                {users.map((user) => {
                  return (
                    <>
                      <div>
                        <h1>Welcome, {user.firstName} (take out later)</h1>
                      </div>
                    </>
                  );
                })}
              </div> */}

              <div className="buttons">
                <button className="signupBtn">
                  <Link to="/signup">SIGN UP</Link>
                </button>
              </div>
              <div className="buttons">
                <button className="loginBtn">
                  <Link to="/login">LOG IN</Link>
                </button>
              </div>
              
                <Switch>
                <Route path="/signup" component={Signup} />
                {/* <Route path="/login" component={Login} /> */}
              </Switch>



{/* NOTES UNDERNEATH THERE ARE SOME MERGE CONFLICTS */}


        <div className="buttons">
          <button className="signupBtn">
            <Link to="/signup">SIGN UP</Link>
          </button>
        </div>
        <div className="buttons">
          <button className="loginBtn">
            <Link to="/login">LOG IN</Link>
          </button>
        </div>

        {/* <div>Link to "Change profile"</div>
            <div>Link to "Information study abroad"</div>
            <div>Link to "Start assignments"</div>
            <div>Link to "Results"</div> */}

        <Switch>
          <Route path="/signup" component={Signup} />
          {/* <Route path="/login" component={Login} /> */}
        </Switch>
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </article>
    );
  }
}

export default User;
