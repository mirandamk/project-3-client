//This is a test page. Should be deleted at some point. Now used to check authentication protect

import React, { Component } from 'react';
// import '../stylesheets/Users.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


class userAssignments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:3000/userassignments')
      .then((response) => {
        this.setState({ user: response.data });
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let user = this.state.user;

    return (
      <div>
            <article className="bg">
              <div className="user-header">
            {this.state.user && <h1>{this.state.user.firstname}</h1>}
              </div>
            </article>
          
        
      </div>
    );
  }
}

export default userAssignments;
