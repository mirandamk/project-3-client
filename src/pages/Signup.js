import React from 'react';
import { signup } from "../utils/auth";
import {Link} from 'react-router-dom';

import './stylesheets/General.css';
import './stylesheets/Signup.css';

export default class Signup extends React.Component {
                 constructor(props) {
                   super(props);
                   this.handleChange = this.handleChange.bind(this);
                   this.handleSubmit = this.handleSubmit.bind(this);
                 }

                 state = {
                   user: {
                     username: '',
                     firstname: '',
                     lastname: '',
                     email: '',
                     password: '',
                    //  home_uni: '',
                    //  exchange_uni: ''
                   },
                 };

                 handleChange(event) {
                   let userCopy = { ...this.state.user };
                   userCopy[event.target.name] = event.target.value;
                   this.setState({
                     user: userCopy,
                   });
                 }

                 // 'login' refers to function in 'utils/auth'
                 handleSubmit() {
                   //debugger
                   signup(this.state.user)
                     .then(() => {
                       this.props.history.push('/login');
                       console.log(this.state.user);
                     })
                     .catch((err) => {
                       console.log(err);
                     });
                 }

                 render() {
                   return (
                     <article className="bg">
                       <div className="sign-up-container">
                         <h2>Create a new account</h2>
                         <div className="sign-up-form">
                           <p className="questionMark">Have an account already? 
                           <Link to="/login" > Log in
                           </Link>
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
                         <div className="sign-up-form">
                           <div>
                             <input
                               onChange={this.handleChange}
                               value={this.state.firstname}
                               name="firstname"
                               type="text"
                               placeholder="firstname"
                               className="form-section"
                             />
                           </div>
                         </div>
                         <div className="sign-up-form">
                           <div>
                             <input
                               onChange={this.handleChange}
                               value={this.state.lastname}
                               name="lastname"
                               type="text"
                               placeholder="lastname"
                               className="form-section"
                             />
                           </div>
                         </div>
                         <div className="sign-up-form">
                           <div>
                             <input
                               onChange={this.handleChange}
                               value={this.state.email}
                               name="email"
                               type="text"
                               placeholder="email"
                               className="form-section"
                             />
                           </div>
                         </div>

                         {/* <div className="sign-up-form">
                           <div>
                             <input
                               onChange={this.handleChange}
                               value={this.state.tel_nr}
                               name="tel_nr"
                               type="Number"
                               placeholder="telephone number"
                               className="form-section"
                             />
                           </div>
                         </div> */}

                         {/* <div className="sign-up-form">
                           <div>
                             <input
                               onChange={this.handleChange}
                               value={this.state.home_uni}
                               name="home_uni"
                               type="text"
                               placeholder="home university"
                               className="form-section"
                             />
                           </div>
                         </div> */}

                         {/* <div className="sign-up-form">
                           <div>
                             <input
                               onChange={this.handleChange}
                               value={this.state.exchange_uni}
                               name="exchange_uni"
                               type="text"
                               placeholder="exchange university"
                               className="form-section"
                             />
                           </div>
                         </div> */}

                         
                         <div className="sign-up-form">
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
                       <button
                         className="signup-btn"
                         onClick={this.handleSubmit}
                       >
                         <p className="signup-text">SIGN UP</p>
                       </button>
                     </article>
                   );
                 }
               }
