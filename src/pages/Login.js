import React, { Component } from 'react';
import { login } from '../utils/auth';
import { Link } from 'react-router-dom';
import './stylesheets/General.css';
import './stylesheets/Login.css';

// import axios from 'axios';
// import qs from 'qs';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    username: '',
    password: '',
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // 'login' refers to function in 'utils/auth'
  handleSubmit(event) {
    event.preventDefault();
    login(this.state)
      .then(() => {
        this.props.history.push('/user');
        console.log(this.state.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <article className="bg">
        <form>
          <div className="login-container">
            <h2>Log in</h2>
            <div className="login-form">
              <p className="questionMark">
                Don't have an account? <Link to="/signup"> Create</Link>
              </p>

              <div>
                <input
                  onChange={this.handleChange}
                  value={this.state.username}
                  name="username"
                  type="text"
                  placeholder="username"
                  className="form-section"
                />
              </div>
            </div>
            <div className="login-form">
              <div>
                <input
                  onChange={this.handleChange}
                  value={this.state.password}
                  name="password"
                  type="password"
                  placeholder="password"
                  className="form-section"
                />
              </div>
            </div>
          </div>
          <button className="login-btn" onClick={this.handleSubmit}>
            <p className="login-text">LOG IN</p>
          </button>
        </form>
      </article>
    );
  }
}

//    e.preventDefault();
//    axios({
//      method: 'POST',
//      data: qs.stringify(this.state),
//      url: 'https://ih-beers-api.herokuapp.com/auth/login',
//      headers: {
//        'Content-Type': 'application/x-www-form-urlencoded',
//      },
//    }).then((response) => {
//      localStorage.setItem(
//        'user',
//        JSON.stringify(response.data)
//      );
//      this.props.history.push('/');
//    });
//  }
