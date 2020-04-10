import React, { Component } from 'react'
import axios from "axios";
import qs from "qs";
import {signup} from "../utils/auth";
// import Nav from "../components/Nav";
// import "./Signup.css";

export default class Signup extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit= (e) => {
    e.preventDefault()
    signup(this.state.user)
    .then((response)=>{
      console.log(response.data.message)
    })


    axios({
      method: 'POST',
      data: qs.stringify(this.state),
      url: 'http://localhost:3000/user/signup',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => {
        debugger;
        localStorage.setItem('user', JSON.stringify(response.data));
        this.props.history.push('/');
      })
      .catch((error) => {
        debugger;
      });
  }

  render() {
    return (
      <div className="signup-container">
        <div className="signup-nav">
        </div>
        <div className="signup-form">
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.username} placeholder="username" type="text" name="username" />
            <input onChange={this.handleChange} value={this.state.firstname} placeholder="firstname" type="text" name="firstname" />
            <input onChange={this.handleChange} value={this.state.lastname} placeholder="lastname" type="text" name="lastname" />
            <input onChange={this.handleChange} value={this.state.email} placeholder="email" type="text" name="email" />
            <input onChange={this.handleChange} value={this.state.password} placeholder="password" type="password" name="password" />
            <button type="submit">Signup </button>
          </form>
        </div>
      </div>
    )
  }
}




// import React, { Component } from 'react';
// import { signup } from '../utils/auth';
// import Axios from 'axios';

// export default class Signup extends Component {
//   state = {
//     user: {},
//   };

//   formHandler = (e) => {
//     let formdata = { ...this.state.user };
//     formdata[e.target.name] = e.target.value;
//     this.setState({
//       user: formdata,
//     });
//   };

//   submitHandler = (e) => {
//     e.preventDefault();
//     signup(this.state.user)
//       .then((response) => {
//         this.props.history.push('/');
//       })
//       .catch((err) => console.log(err));
//   };

//   checkUserExists = (username) => {};

//   render() {
//     return (
//         <form className="signup" onSubmit={this.submitHandler}>
//           <input
//             name="username"
//             type="text"
//             onChange={this.formHandler}
//             placeholder="username"
//             required
//           />
//           <input
//             name="email"
//             type="text"
//             onChange={this.formHandler}
//             placeholder="email"
//           />
//           <input
//             name="firstname"
//             type="text"
//             onChange={this.formHandler}
//             placeholder="firstname"
//             required
//           />
//             <input
//             name="lastname"
//             type="text"
//             onChange={this.formHandler}
//             placeholder="lastname"
//             required
//           />
//           <input
//             name="password"
//             type="password"
//             onChange={this.formHandler}
//             placeholder="password"
//             required
//           />
//           <button type="submit">Sign Up</button>
//         </form>
//     );
//   }
// }
