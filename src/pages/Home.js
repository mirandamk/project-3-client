//Note: Emilie, are we still using this page, or is this replaced by one of the pages in the 'user' folder?
// ==>This one is still in use, this file was earlier called User.js, but is now replaced. These comment lines can be removed.
import React, { Component } from 'react';
import './stylesheets/Home.css';
import axios from 'axios';
// import Signup from './Signup.js';
// import Login from './Login.js';
import { Link } from 'react-router-dom';


class Home extends Component {
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
    // let users = this.state.users; // We can remove this line, right?
    return (
      <article className="bg">
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
              
                {/* <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
              </Switch> */}
      </article>
    );
  }
}

export default Home;
